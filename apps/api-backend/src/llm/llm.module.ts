import { Module } from '@nestjs/common';
import { OpenAiProvider } from './providers/openai.provider';
import { ClaudeProvider } from './providers/claude.provider';
import { GeminiProvider } from './providers/gemini.provider';
import { LlmService } from './llm.service';
import { LLM_PROVIDERS } from './interfaces/llm-provider.interface';

@Module({
  providers: [
    OpenAiProvider,
    ClaudeProvider,
    GeminiProvider,
    {
      provide: LLM_PROVIDERS,
      useFactory: (
        openai: OpenAiProvider,
        claude: ClaudeProvider,
        gemini: GeminiProvider,
      ) => [openai, claude, gemini],
      inject: [OpenAiProvider, ClaudeProvider, GeminiProvider],
    },
    LlmService,
  ],
  exports: [LlmService],
})
export class LlmModule { }