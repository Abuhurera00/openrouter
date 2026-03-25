import {
    ForbiddenException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import {
    ApiKeyRepository,
    ModelProviderMappingRepository,
    UserRepository,
    ConversationRepository,
    ModelDocument,
    ApiKeyDocument,
    ModelProviderMappingDocument,
    ModelRepository,
} from '@workspace/database';
import { LlmService } from '../llm/llm.service';
import { ChatCompletionDto } from './dto/chat-completion.dto';
import { LlmResponse } from '../llm/interfaces/llm-provider.interface';

export interface ChatCompletionResponse {
    completions: LlmResponse['completions'];
    inputTokensConsumed: number;
    outputTokensConsumed: number;
    creditsUsed: number;
}

@Injectable()
export class ChatService {
    constructor(
        private readonly userRepo: UserRepository,
        private readonly apiKeyRepo: ApiKeyRepository,
        private readonly modelProviderMappingRepo: ModelProviderMappingRepository,
        private readonly conversationRepo: ConversationRepository,
        private readonly llmModel: ModelRepository,

        // LLM orchestrator
        private readonly llmService: LlmService,
    ) { }

    async chatCompletion(
        rawApiKey: string,
        body: ChatCompletionDto,
    ): Promise<ChatCompletionResponse> {
        const apiKeyDoc = await this.apiKeyRepo.findOne({ apiKey: rawApiKey });

        if (!apiKeyDoc) {
            throw new ForbiddenException('Invalid API key');
        }

        const user = await this.userRepo.findById(apiKeyDoc.userId.toString());

        if (!user) {
            throw new ForbiddenException('User not found');
        }

        if (user.credits <= 0) {
            throw new ForbiddenException('Insufficient credits');
        }

        const [, providerModelName] = body.model.split('/');

        const modelDoc = await this.llmModel.findOne({ slug: body.model });

        if (!modelDoc) {
            throw new NotFoundException(`Model "${body.model}" is not supported`);
        }

        const mappings = await this.modelProviderMappingRepo.findAll(
            { modelId: modelDoc._id },
            {},
            { populate: 'providerId' },
        ) as (ModelProviderMappingDocument & { providerId: { name: string } })[];

        if (!mappings.length) {
            throw new NotFoundException(`No providers available for model "${body.model}"`);
        }

        const mapping = mappings[Math.floor(Math.random() * mappings.length)];
        const providerName = (mapping.providerId as unknown as { name: string }).name;

        const llmResponse = await this.llmService.chat(
            providerName,
            providerModelName,
            body.messages,
        );

        const creditsUsed =
            (llmResponse.inputTokensConsumed * mapping.inputTokenCost +
                llmResponse.outputTokensConsumed * mapping.outputTokenCost) /
            10;

        await Promise.all([
            this.userRepo.updateOne({ _id: user._id }, { $inc: { credits: -creditsUsed } }),

            this.apiKeyRepo.updateOne({
                apiKey: apiKeyDoc.apiKey
            }, {
                $inc: { creditsConsumed: creditsUsed }
            }),

            this.conversationRepo.create({
                userId: user._id as Types.ObjectId,
                apiKeyId: apiKeyDoc._id as Types.ObjectId,
                modelProviderMappingId: mapping._id as Types.ObjectId,
                input: body.messages.map((m) => m.content).join('\n'),
                output: llmResponse.completions.choices.map((c) => c.message.content).join('\n'),
                inputTokenCount: llmResponse.inputTokensConsumed,
                outputTokenCount: llmResponse.outputTokensConsumed,
            } as any,
            ),
        ]);

        return {
            completions: llmResponse.completions,
            inputTokensConsumed: llmResponse.inputTokensConsumed,
            outputTokensConsumed: llmResponse.outputTokensConsumed,
            creditsUsed,
        };
    }
}