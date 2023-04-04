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

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async login(data: SignInDto) {
    try {
      const user = await this.userRepository.findOneOrFail({
        where: { idGoogle: data.idGoogle },
      });

      if (!user) {
        // this.userService.create()
      }
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
