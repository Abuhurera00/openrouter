import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { DatabaseModule } from '@workspace/database';
import { AuthCoreModule } from '@/core/auth-core.module';
import { CommonModule } from '@/common/common.module';

@Module({
  imports: [
    DatabaseModule,
    AuthCoreModule,
    CommonModule,
  ],
  controllers: [PaymentsController],
  providers: [PaymentsService]
})
export class PaymentsModule { }
