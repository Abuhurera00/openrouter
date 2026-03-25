import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from '@workspace/database';
import configuration from './common/config/configuration';
import { envValidationSchema } from './common/config/env.validation';
import { LlmModule } from './llm/llm.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema: envValidationSchema,
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('database.mongoUri'),
      }),
    }),
    DatabaseModule,
    LlmModule,
    ChatModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
