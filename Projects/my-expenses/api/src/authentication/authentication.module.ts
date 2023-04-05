import { Module, forwardRef } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { UsersModule } from 'src/modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/modules/users/entities/user.entity';
import { GoogleAuthenticationModule } from './google-authentication/google-authentication.module';
import { GoogleAuthenticationService } from './google-authentication/google-authentication.service';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    TypeOrmModule.forFeature([UserEntity]),
    GoogleAuthenticationModule,
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, GoogleAuthenticationService],
})
export class AuthenticationModule {}
