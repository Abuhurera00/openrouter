import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { LlmModule } from '@/llm/llm.module';
import { DatabaseModule } from '@workspace/database';

@Module({
  imports: [LlmModule, DatabaseModule],
  controllers: [ChatController],
  providers: [ChatService]
})
export class ChatModule { }
