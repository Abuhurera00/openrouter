import { Body, Controller, Post } from '@nestjs/common';
import { AuthUserDto } from './dto/auth-user.dto';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly service: AuthService) { }

    @Post('signup')
    async signUp(@Body() dto: AuthUserDto) {
        return this.service.signUp(dto);
    }

    @Post('signin')
    async signIn(@Body() dto: AuthUserDto) {
        return this.service.signIn(dto);
    }
}
