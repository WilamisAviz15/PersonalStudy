import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';

import { AuthJwtInterface } from './../../authentication/interfaces/auth-jwt.interface';
import { ProfileEditDto } from './dto/profile-edit.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { AuthenticationService } from '../../authentication/authentication.service';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private readonly authService: AuthenticationService,
  ) {}

  async update(currentUser: AuthJwtInterface, body: ProfileEditDto): Promise<any> {
    try {
      if (currentUser.id !== body.id) {
        throw new UnauthorizedException('Não autorizado.');
      }

      let user = await this.userRepository.findOne({
        where: { id: currentUser.id },
        select: ['id', 'name', 'registrationNumber'],
      });

      delete body.newPassword;
      delete body.confirmPassword;

      const entity = Object.assign(new UserEntity(), {
        id: user.id,
        name: user.name,
        cpf: user.cpf,
        password: body.password,
        registrationNumber: user.registrationNumber,
      });

      await this.userRepository.save(entity);
      user = await this.userRepository.findOne({
        where: { id: user.id },
        relations: ['roles'],
      });
      const accessToken = await this.authService.signToken(user);
      return { user, accessToken, message: 'O usuário foi modificado com sucesso.' };
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new HttpException({ message: 'Não foi possível editar o perfil.' }, HttpStatus.BAD_REQUEST);
    }
  }
}
