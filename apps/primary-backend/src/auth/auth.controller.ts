import { Body, Controller, Get, Logger, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthUserDto } from './dto/auth-user.dto';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import type { Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
import { CurrentUser } from '@/common/decorators/current-user.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
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

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getProfile(@CurrentUser() user) {
        return this.service.getUserDetails(user._id);
    }
}
