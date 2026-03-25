import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { ILlmProvider, ChatMessage, LlmResponse } from '../interfaces/llm-provider.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OpenAiProvider implements ILlmProvider {
    readonly providerName = 'OpenAI';
    private readonly client: OpenAI;

    constructor(
        private readonly configService: ConfigService
    ) {
        this.client = new OpenAI({ apiKey: this.configService.get('llmApiKey.openai') });
    }

    async chat(model: string, messages: ChatMessage[]): Promise<LlmResponse> {
        const response = await this.client.responses.create({
            model,
            input: messages.map((m) => ({ role: m.role, content: m.content })),
        });

        return {
            inputTokensConsumed: response.usage?.input_tokens ?? 0,
            outputTokensConsumed: response.usage?.output_tokens ?? 0,
            completions: {
                choices: [{ message: { content: response.output_text } }],
            },
        };
    }
}