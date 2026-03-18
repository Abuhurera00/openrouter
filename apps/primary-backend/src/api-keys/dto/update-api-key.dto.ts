import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsOptional } from 'class-validator';
import { createApiKeyDto } from './create-api-key.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateApiKeyDto extends PartialType(createApiKeyDto) {
    @ApiProperty({ example: false, type: Boolean })
    @IsBoolean()
    @IsOptional()
    disabled?: boolean;
}
