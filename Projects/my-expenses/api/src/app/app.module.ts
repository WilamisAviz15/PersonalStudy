import { Module } from '@nestjs/common';

import { UsersModule } from '../modules/users/users.module';
import { AuthenticationModule } from '../authentication/authentication.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    UsersModule,
    AuthenticationModule,
  ],
})
export class AppModule {}
