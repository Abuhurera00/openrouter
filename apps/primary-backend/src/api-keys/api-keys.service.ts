import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiKeyRepository } from '@workspace/database';
import { createApiKeyDto } from './dto/create-api-key.dto';
import { Types } from 'mongoose';
import { UpdateApiKeyDto } from './dto/update-api-key.dto';

@Injectable()
export class ApiKeysService {
    constructor(
        private readonly apiKeyRepo: ApiKeyRepository,
        private readonly configService: ConfigService
    ) { }

    async generateApiKey() {
        const length = this.configService.get<number>('apiKey.length')!;
        const alphabetSet = this.configService.get<string>('apiKey.alphabetSet')!;
        let suffixKey = "";
        for (let i = 0; i < length; i++) {
            suffixKey += alphabetSet[Math.floor(Math.random() * alphabetSet.length)]
        }
        return `sk-or-v1-${suffixKey}`
    }

    async createApiKey({ name }: createApiKeyDto, userId: Types.ObjectId) {
        const apiKey = await this.generateApiKey();
        const createdApiKey = await this.apiKeyRepo.create({
            name,
            apiKey,
            userId
        });
        return {
            data: createdApiKey,
            message: "API key created successfully",
        };
    }

    async getApiKeys(userId: Types.ObjectId) {
        const apiKeys = await this.apiKeyRepo.findAll({ userId, deleted: false }, {}, { sort: { createdAt: -1 } });
        return {
            apiKeys,
            message: "API keys retrieved successfully",
        };
    }

    async updateApiKey(id: string, dto: UpdateApiKeyDto, userId: Types.ObjectId) {
        const updatedApiKey = await this.apiKeyRepo.updateOne(
            { _id: id, userId },
            { $set: dto },
        );
        return {
            data: updatedApiKey,
            message: "API key updated successfully",
        };
    }


    async delete(id: string, userId: Types.ObjectId) {
        const deletedApiKey = await this.apiKeyRepo.updateOne({ _id: id, userId }, { deleted: true });
        return {
            data: deletedApiKey,
            message: "API key deleted successfully",
        };
    }
}
