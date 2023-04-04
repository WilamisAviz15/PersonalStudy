import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleAuthenticationService {
  // oauthClient: Auth.OAuth2Client;
  // constructor() {}
  // async authenticate(token: string) {
  //   const tokenInfo = await this.oauthClient.getTokenInfo(token);
  //   const email = tokenInfo.email;
  //   try {
  //     const user = await this.usersService.getByEmail(email);
  //     return this.handleRegisteredUser(user);
  //   } catch (error) {
  //     if (error.status !== 404) {
  //       throw new error();
  //     }
  //     return this.registerUser(token, email);
  //   }
  // }
}
