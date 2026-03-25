import { Injectable } from '@nestjs/common';
import Anthropic from '@anthropic-ai/sdk';
import { TextBlock } from '@anthropic-ai/sdk/resources';
import { ILlmProvider, ChatMessage, LlmResponse } from '../interfaces/llm-provider.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ClaudeProvider implements ILlmProvider {
    readonly providerName = 'Claude API';
    private readonly client: Anthropic;
    constructor(
        private readonly configService: ConfigService
    ) {
        this.client = new Anthropic({ apiKey: this.configService.get('llmApiKey.anthropic') });
    }

    async chat(model: string, messages: ChatMessage[]): Promise<LlmResponse> {
        const response = await this.client.messages.create({
            model,
            max_tokens: 2048,
            messages: messages.map((m) => ({ role: m.role, content: m.content })),
        });

        return {
            inputTokensConsumed: response.usage.input_tokens,
            outputTokensConsumed: response.usage.output_tokens,
            completions: {
                choices: response.content.map((c) => ({
                    message: { content: (c as TextBlock).text },
                })),
            },
        };
    }
}