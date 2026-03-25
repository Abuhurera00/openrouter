import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const allowOrigins = configService.get<string>('app.allowOrigins', { infer: true })?.split(',') || [];
  app.enableCors({
    origin: allowOrigins,
    credentials: true,
  });
  app.use(cookieParser.default());
  app.setGlobalPrefix(
    configService.get<string>('app.apiPrefix', { infer: true }) || 'api',
    {
      exclude: ['/'],
    },
  );
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());

  const options = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API docs')
    .setVersion('1.0')
    .addBearerAuth()
    // .addGlobalParameters({
    //   in: 'header',
    //   required: false,
    //   name: process.env.APP_HEADER_LANGUAGE || 'x-custom-lang',
    //   schema: {
    //     example: 'en',
    //   },
    // })
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  await app.listen(configService.get<number>('app.port', { infer: true }));
}
bootstrap();