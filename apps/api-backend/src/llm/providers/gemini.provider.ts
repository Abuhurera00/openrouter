import { Injectable } from '@nestjs/common';
import { GoogleGenAI } from '@google/genai';
import { ILlmProvider, ChatMessage, LlmResponse } from '../interfaces/llm-provider.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GeminiProvider implements ILlmProvider {
    readonly providerName = 'Google API';
    private readonly client: GoogleGenAI;

    constructor(
        private readonly configService: ConfigService
    ) {
        this.client = new GoogleGenAI({ apiKey: this.configService.get('llmApiKey.google') });
    }

    async chat(model: string, messages: ChatMessage[]): Promise<LlmResponse> {
        const response = await this.client.models.generateContent({
            model,
            contents: messages.map((m) => ({ role: m.role, text: m.content })),
        });

        return {
            inputTokensConsumed: response.usageMetadata?.promptTokenCount ?? 0,
            outputTokensConsumed: response.usageMetadata?.candidatesTokenCount ?? 0,
            completions: {
                choices: [{ message: { content: response.text ?? '' } }],
            },
        };
    }
}