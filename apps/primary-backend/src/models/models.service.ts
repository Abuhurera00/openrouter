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
        return this.modelRepository.findAll({}, {}, { populate: 'companyId' });
    }

    async getProviders() {
        return this.providerRepository.findAll({});
    }

    async getModelProviders(id: string) {
        return this.modelProviderMappingRepository.findAll({ modelId: id }, {}, { populate: ['modelId', 'providerId'] });
    }
}
