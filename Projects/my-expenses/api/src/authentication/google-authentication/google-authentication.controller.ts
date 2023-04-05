import { Body, Controller, Post } from '@nestjs/common';
import { GoogleAuthenticationService } from './google-authentication.service';
import TokenVerificationDto from './dto/token-verification-dto';

@Controller('google-authentication')
export class GoogleAuthenticationController {
  constructor(
    private readonly googleAuthService: GoogleAuthenticationService,
  ) {}

  @Post()
  async verifyToken(@Body() tokenData: TokenVerificationDto) {
    return this.googleAuthService.verifyToken(tokenData);
  }
}
