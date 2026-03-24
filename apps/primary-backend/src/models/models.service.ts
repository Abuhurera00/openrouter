import { Injectable } from '@nestjs/common';
import { ModelProviderMappingRepository, ModelRepository, ProviderRepository } from '@workspace/database';

@Injectable()
export class ModelsService {
    constructor(
        private readonly modelRepository: ModelRepository,
        private readonly providerRepository: ProviderRepository,
        private readonly modelProviderMappingRepository: ModelProviderMappingRepository
    ) { }

    async getModels() {
        const models = await this.modelRepository.findAll({}, {}, { populate: 'companyId' });
        return {
            data: models,
            message: "Models retrieved successfully",
        };
    }

    async getProviders() {
        const providers = await this.providerRepository.findAll({});
        return {
            data: providers,
            message: "Providers retrieved successfully",
        };
    }

    async getModelProviders(id: string) {
        const modelProviders = await this.modelProviderMappingRepository.findAll({ modelId: id }, {}, { populate: ['modelId', 'providerId'] });
        return {
            data: modelProviders,
            message: "Model providers retrieved successfully",
        };
    }
}
