import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from '@workspace/database';
import configuration from './common/config/configuration';
import { envValidationSchema } from './common/config/env.validation';
import { AuthModule } from './auth/auth.module';
import { ApiKeysModule } from './api-keys/api-keys.module';
import { ModelsModule } from './models/models.module';
import { PaymentsModule } from './payments/payments.module';

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
    AuthModule,
    ApiKeysModule,
    ModelsModule,
    PaymentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
