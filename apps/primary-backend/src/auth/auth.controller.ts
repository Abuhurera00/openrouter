import { Body, Controller, Logger, Post, Res } from '@nestjs/common';
import { AuthUserDto } from './dto/auth-user.dto';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import type { Response } from 'express';
import { ConfigService } from '@nestjs/config';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    private readonly logger = new Logger(AuthController.name);
    constructor(
        private readonly service: AuthService,
        private readonly configService: ConfigService,
    ) { }

    @Post('signup')
    async signUp(@Body() dto: AuthUserDto) {
        return this.service.signUp(dto);
    }

    @Post('signin')
    async signIn(@Body() dto: AuthUserDto, @Res({ passthrough: true }) res: Response,) {
        const { token, user } = await this.service.signIn(dto);

        const isProduction = this.configService.get<string>('app.nodeEnv') === 'production';

        this.logger.debug(
            `Setting auth cookie with token: ${token} (production: ${isProduction})`,
        );

        res.cookie('auth', token, {
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction ? 'strict' : 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return {
            message: 'Signed in successfully',
            user,
        };
    }
}
