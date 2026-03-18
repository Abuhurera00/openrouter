import { Module } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
// import { DatabaseModule } from '@workspace/database';
import { AuthCoreModule } from '@/core/auth-core.module';

@Module({
    imports: [
        // DatabaseModule,
        AuthCoreModule,
    ],
    providers: [JwtAuthGuard],
    exports: [JwtAuthGuard],
})
export class CommonModule { }