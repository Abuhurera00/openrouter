import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
    ILlmProvider,
    LLM_PROVIDERS,
    ChatMessage,
    LlmResponse,
} from './interfaces/llm-provider.interface';

@Injectable()
export class LlmService {
    constructor(
        @Inject(LLM_PROVIDERS) private readonly providers: ILlmProvider[],
    ) { }

    async chat(
        providerName: string,
        model: string,
        messages: ChatMessage[],
    ): Promise<LlmResponse> {
        const normalizedName = providerName.startsWith('Google') ? 'Google API' : providerName;

        const provider = this.providers.find((p) => p.providerName === normalizedName);

        if (!provider) {
            throw new NotFoundException(`No provider found for: ${providerName}`);
        }

        return provider.chat(model, messages);
    }
}