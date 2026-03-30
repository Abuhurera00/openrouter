import {
    Body,
    Controller,
    Headers,
    HttpCode,
    HttpStatus,
    Post,
    UnauthorizedException,
} from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatCompletionDto } from './dto/chat-completion.dto';

@Controller('chat')
export class ChatController {
    constructor(private readonly chatService: ChatService) { }

    @Post('completions')
    @HttpCode(HttpStatus.OK)
    async chatCompletions(
        @Headers('authorization') authHeader: string,
        @Body() body: ChatCompletionDto,
    ) {
        if (!authHeader?.startsWith('Bearer ')) {
            throw new UnauthorizedException('Missing or malformed Authorization header');
        }

        const apiKey = authHeader.slice(7).trim();

        return this.chatService.chatCompletion(apiKey, body);
    }
}