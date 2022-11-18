import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { configValidationSchema } from './config/config.schema';
import { DatabaseProvidersModule } from './database/database.providers.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: configValidationSchema,
    }),
    DatabaseProvidersModule,
    TasksModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
