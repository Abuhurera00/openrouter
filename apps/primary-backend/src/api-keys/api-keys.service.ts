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
        return createdApiKey;
    }

    async getApiKeys(userId: Types.ObjectId) {
        return this.apiKeyRepo.findAll({ userId, deleted: false });
    }

    async updateApiKey(id: string, dto: UpdateApiKeyDto, userId: Types.ObjectId) {
        return this.apiKeyRepo.updateOne(
            { _id: id, userId },
            { $set: dto },
        );
    }


    async delete(id: string, userId: Types.ObjectId) {
        return this.apiKeyRepo.updateOne({ _id: id, userId }, { deleted: true });
    }
}
