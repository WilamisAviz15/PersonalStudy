import { Controller, Post, Body } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { SignInDto } from './dto/sign-in-dto';
import { UserInterface } from './interfaces/user.interface';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post()
  login(@Body() data: SignInDto): Promise<UserInterface> {
    return this.authService.login(data);
  }
}
