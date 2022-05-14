import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1'
  });

  const config = new DocumentBuilder()
    .setTitle('GitHub Integration')
    .setDescription('Create an integration with GitHub to consume some resources')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  await app.listen(configService.get<number>('PORT') || 3000);
}
bootstrap();
