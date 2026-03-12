import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// Schemas
import { User, UserSchema } from './schemas';
import { ApiKey, ApiKeySchema } from './schemas';
import { Company, CompanySchema } from './schemas';
import { Model, ModelSchema } from './schemas';
import { Provider, ProviderSchema } from './schemas';
import { ModelProviderMapping, ModelProviderMappingSchema } from './schemas';
import { OnrampTransaction, OnrampTransactionSchema } from './schemas';
import { Conversation, ConversationSchema } from './schemas';
// Repositories
import { ApiKeyRepository, CompanyRepository, ConversationRepository, ModelProviderMappingRepository, ModelRepository, OnrampTransactionRepository, ProviderRepository, UserRepository } from './repositories';

const SCHEMAS = MongooseModule.forFeature([
  { name: User.name, schema: UserSchema },
  { name: ApiKey.name, schema: ApiKeySchema },
  { name: Company.name, schema: CompanySchema },
  { name: Model.name, schema: ModelSchema },
  { name: Provider.name, schema: ProviderSchema },
  { name: ModelProviderMapping.name, schema: ModelProviderMappingSchema },
  { name: OnrampTransaction.name, schema: OnrampTransactionSchema },
  { name: Conversation.name, schema: ConversationSchema },
]);

const REPOSITORIES = [
  UserRepository,
  ApiKeyRepository,
  ModelProviderMappingRepository,
  ConversationRepository,
  OnrampTransactionRepository,
  ProviderRepository,
  ModelRepository,
  CompanyRepository
];

// This module registers every schema with Mongoose.
// Import DatabaseModule into any NestJS app module and all models become available.
@Module({
  imports: [SCHEMAS],
  providers: [...REPOSITORIES],
  exports: [MongooseModule, ...REPOSITORIES],
})
export class DatabaseModule {}