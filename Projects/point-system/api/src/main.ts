import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';
import { GLOBAL_API_PREFIX } from './constants/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.API_PORT || 3333;
  app.setGlobalPrefix(GLOBAL_API_PREFIX);
  app.enableCors();

  await app.listen(PORT, () => {
    Logger.log(`Listening at http://localhost:${PORT}/${GLOBAL_API_PREFIX}`);
  });
}
bootstrap();
