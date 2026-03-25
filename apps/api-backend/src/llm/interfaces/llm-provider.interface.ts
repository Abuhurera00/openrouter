export interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
}

export interface LlmResponse {
    inputTokensConsumed: number;
    outputTokensConsumed: number;
    completions: {
        choices: {
            message: {
                content: string;
            };
        }[];
    };
}

// Every provider must implement this
export interface ILlmProvider {
    readonly providerName: string;
    chat(model: string, messages: ChatMessage[]): Promise<LlmResponse>;
}

// Injection token — used instead of a string literal
export const LLM_PROVIDERS = 'LLM_PROVIDERS';