import { Module } from '@nestjs/common';
import { ModelsController } from './models.controller';
import { ModelsService } from './models.service';
import { DatabaseModule } from '@workspace/database';
import { AuthCoreModule } from '@/core/auth-core.module';
import { CommonModule } from '@/common/common.module';

@Module({
  imports: [
    DatabaseModule,
    AuthCoreModule,
    CommonModule,
  ],
  controllers: [ModelsController],
  providers: [ModelsService]
})
export class ModelsModule { }
