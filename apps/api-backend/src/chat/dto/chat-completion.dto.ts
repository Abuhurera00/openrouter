import { IsString, IsArray, ValidateNested, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';

export class MessageDto {
    @IsEnum(['user', 'assistant'])
    role: 'user' | 'assistant';

    @IsString()
    content: string;
}

export class ChatCompletionDto {
    @IsString()
    model: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MessageDto)
    messages: MessageDto[];
}