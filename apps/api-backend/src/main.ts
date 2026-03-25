import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const allowOrigins = configService.get<string>('app.allowOrigins', { infer: true })?.split(',') || [];
  app.enableCors({
    origin: allowOrigins,
    credentials: true,
  });
  app.setGlobalPrefix(
    configService.get<string>('app.apiPrefix', { infer: true }) || 'api',
    {
      exclude: ['/'],
    },
  );
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
