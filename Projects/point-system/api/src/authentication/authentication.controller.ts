import { Body, Controller, Post } from '@nestjs/common';

import { AuthenticationService } from './authentication.service';
import { UserInterface } from '../modules/users/interfaces/user.interface';
import { SignInDto } from './dto/sign-in.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post('login')
  async login(@Body() data: SignInDto): Promise<{ user: UserInterface; accessToken: string; id: number }> {
    return this.authService.login(data);
  }

  @Post('refresh-token')
  async refreshToken(@Body() data: RefreshTokenDto): Promise<{ user: UserInterface; accessToken: string; id: number }> {
    return this.authService.refreshToken(data.token);
  }
}
