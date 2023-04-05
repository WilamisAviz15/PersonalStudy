import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import TokenVerificationDto from './dto/token-verification-dto';
import { OAuth2Client } from 'google-auth-library';

@Injectable()
export class GoogleAuthenticationService {
  private client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
  );
  constructor() {}

  async verifyToken(tokenData: TokenVerificationDto) {
    try {
      const ticket = await this.client.verifyIdToken({
        idToken: tokenData.idToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      return ticket.getPayload();
    } catch (err) {
      throw new HttpException(
        'Ocorreu um erro ao carregar usuário',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
