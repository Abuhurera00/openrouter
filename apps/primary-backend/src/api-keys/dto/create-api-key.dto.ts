import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";


export class createApiKeyDto {
    @ApiProperty({ example: 'My First API Key', type: String })
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string
}