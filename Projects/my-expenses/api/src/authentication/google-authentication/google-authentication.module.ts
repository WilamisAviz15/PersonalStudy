import { Module } from '@nestjs/common';
import { GoogleAuthenticationService } from './google-authentication.service';
import { GoogleAuthenticationController } from './google-authentication.controller';

@Module({
  controllers: [GoogleAuthenticationController],
  providers: [GoogleAuthenticationService],
})
export class GoogleAuthenticationModule {}
