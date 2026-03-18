import { Module } from '@nestjs/common';
import { ApiKeysController } from './api-keys.controller';
import { ApiKeysService } from './api-keys.service';
import { DatabaseModule } from '@workspace/database';
import { CommonModule } from '@/common/common.module';
import { AuthCoreModule } from '@/core/auth-core.module';

@Module({
  imports: [
    DatabaseModule,
    AuthCoreModule,
    CommonModule,
  ],
  controllers: [ApiKeysController],
  providers: [ApiKeysService]
})
export class ApiKeysModule { }
