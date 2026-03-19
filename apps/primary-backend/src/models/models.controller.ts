import { Controller, Get, Param } from '@nestjs/common';
import { ModelsService } from './models.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Models')
@Controller('models')
export class ModelsController {
    constructor(
        private readonly modelsService: ModelsService
    ) { }

    @Get()
    @ApiOperation({
        summary: 'Get all models',
        description: 'Returns a list of all available models. This includes both built-in and custom models that have been added to the system.'
    })
    getModels() {
        return this.modelsService.getModels();
    }

    @Get('providers')
    @ApiOperation({
        summary: 'Get all providers',
        description: 'Returns a list of all available providers.'
    })
    getProviders() {
        return this.modelsService.getProviders();
    }


    @Get(':id/providers')
    @ApiOperation({
        summary: 'Get providers for a specific model',
        description: 'Returns a list of providers associated with the specified model.'
    })
    getModelProviders(
        @Param('id') id: string,
    ) {
        return this.modelsService.getModelProviders(id);
    }
}
