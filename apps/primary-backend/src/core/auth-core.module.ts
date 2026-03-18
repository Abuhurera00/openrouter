import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                secret: config.get('jwt.secret'),
                signOptions: {
                    expiresIn: config.get('jwt.expiresIn'),
                },
            }),
        }),
    ],
    exports: [JwtModule],
})
export class AuthCoreModule { }