import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { ApiKey, ApiKeySchema } from './schemas/api-key.schema';
import { Company, CompanySchema } from './schemas/company.schema';
import { Model, ModelSchema } from './schemas/model.schema';
import { Provider, ProviderSchema } from './schemas/provider.schema';
import { ModelProviderMapping, ModelProviderMappingSchema } from './schemas/model-provider-mapping.schema';
import { OnrampTransaction, OnrampTransactionSchema } from './schemas/onramp-transaction.schema';
import { Conversation, ConversationSchema } from './schemas/conversation.schema';

// This module registers every schema with Mongoose.
// Import DatabaseModule into any NestJS app module and all models become available.
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: ApiKey.name, schema: ApiKeySchema },
      { name: Company.name, schema: CompanySchema },
      { name: Model.name, schema: ModelSchema },
      { name: Provider.name, schema: ProviderSchema },
      { name: ModelProviderMapping.name, schema: ModelProviderMappingSchema },
      { name: OnrampTransaction.name, schema: OnrampTransactionSchema },
      { name: Conversation.name, schema: ConversationSchema },
    ]),
  ],
  exports: [MongooseModule], // <-- critical: re-export so consuming modules can inject models
})
export class DatabaseModule {}