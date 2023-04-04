import { Body, Controller, Post } from '@nestjs/common';
import { GoogleAuthenticationService } from './google-authentication.service';
import TokenVerificationDto from './dto/token-verification-dto';
import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
);

@Controller('google-authentication')
export class GoogleAuthenticationController {
  constructor(
    private readonly googleAuthenticationService: GoogleAuthenticationService,
  ) {}

  @Post()
  async authenticate(@Body() tokenData: TokenVerificationDto) {
    try {
      const ticket = await client.verifyIdToken({
        idToken: '',
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      // log the ticket payload in the console to see what we have
      console.log(ticket.getPayload());
    } catch (err) {
      console.log(err);
    }
  }
}
