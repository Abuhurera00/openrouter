import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { UpdateApiKeyDto } from './dto/update-api-key.dto';
import { CurrentUser } from '@/common/decorators/current-user.decorator';
import { ApiKeysService } from './api-keys.service';
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
import { createApiKeyDto } from './dto/create-api-key.dto';

@Controller('api-keys')
export class ApiKeysController {
    constructor(
        private readonly apiKeysService: ApiKeysService,
    ) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    createApiKey(
        @Body() dto: createApiKeyDto,
        @CurrentUser() user
    ) {
        return this.apiKeysService.createApiKey(dto, user._id);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getApiKeys(@CurrentUser() user) {
        return this.apiKeysService.getApiKeys(user._id);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    updateApiKey(
        @Param('id') id: string,
        @Body() dto: UpdateApiKeyDto,
        @CurrentUser() user,
    ) {
        return this.apiKeysService.updateApiKey(
            id,
            dto,
            user._id,
        );
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteApiKey(
        @Param('id') id: string,
        @CurrentUser() user,
    ) {
        return this.apiKeysService.delete(id, user._id);
    }

}
