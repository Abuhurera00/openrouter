import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser.default());
  const configService = app.get(ConfigService);
  app.setGlobalPrefix(
    configService.get<string>('app.apiPrefix', { infer: true }) || 'api',
    {
      exclude: ['/'],
    },
  );

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