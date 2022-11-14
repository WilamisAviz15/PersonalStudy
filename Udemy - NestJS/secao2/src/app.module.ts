import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { DatabaseProvidersModule } from './database/database.providers.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TasksModule, DatabaseProvidersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
