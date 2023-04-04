import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const PORT = 3333;
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000',
  });
  await app.listen(PORT, () => {
    Logger.log(`Listening at http://localhost:${PORT}/`);
  });
}
bootstrap();
