import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DatabaseModule } from '@workspace/database';
// import { JwtModule } from '@nestjs/jwt';
import { AuthCoreModule } from '@/core/auth-core.module';
import { CommonModule } from '@/common/common.module';

@Module({
  imports: [
    DatabaseModule,
    AuthCoreModule,
    CommonModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
  // exports: [JwtModule]
})
export class AuthModule { }
