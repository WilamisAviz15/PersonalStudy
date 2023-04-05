import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { SignInDto } from './dto/sign-in-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/modules/users/entities/user.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/modules/users/users.service';
import { GoogleAuthenticationService } from './google-authentication/google-authentication.service';
import { UserInterface } from './interfaces/user.interface';

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private googleAuthService: GoogleAuthenticationService,
  ) {}

  async login(data: SignInDto): Promise<UserInterface> {
    try {
      const tokenPayload = await this.googleAuthService.verifyToken(data);
      let user = await this.userRepository.findOne({
        where: { email: tokenPayload.email },
      });
      if (!user) {
        const newUser: UserInterface = {
          name: tokenPayload.name,
          email: tokenPayload.email,
          photoUrl: tokenPayload.picture,
        };
        const entity = Object.assign(new UserEntity(), newUser);
        user = await this.userRepository.save(entity);
      }
      console.log(tokenPayload);
      return user;
    } catch (error) {
      if (error instanceof HttpException || UnauthorizedException) {
        throw error;
      }
      throw new HttpException(
        { message: 'Não foi possível realizar o login.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
