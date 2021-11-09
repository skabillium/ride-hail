import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

/**
 * TODO:
 * 1. Remove default API endpoints. ✔️
 * 2. Add validation to create dtos. ✔️
 * 3. Add comments to special functions. ✔️
 * 4. Find a solution for embedded dtos in swagger. ✔️
 * 5. Update rated array on response creation/deletion.
 * 6. Fix todos
 */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Ride hailing app')
    .setDescription('REST API responsible for database interfacing')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  await app.listen(5000);
}
bootstrap();
