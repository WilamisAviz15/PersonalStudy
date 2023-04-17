import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UserInterface } from '../modules/users/interfaces/user.interface';
import { ViewMenusByRolesEntity } from '../modules/users/entities/view-menu-by-roles.entity';
import { RoleInterface } from '../modules/roles/interfaces/role.interface';
import { UserEntity } from '../modules/users/entities/user.entity';
import { AuthJwtInterface } from './interfaces/auth-jwt.interface';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRepository(ViewMenusByRolesEntity)
    private readonly viewMenusByRolesRepository: Repository<ViewMenusByRolesEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly jwtService: JwtService,
  ) {}

  async login(data: SignInDto): Promise<{ accessToken: string; user: UserInterface; id: number }> {
    try {
      const user = await this.userRepository.findOne({
        where: { registrationNumber: data.login },
        relations: ['roles', 'position'],
      });

      if (user && bcrypt.compareSync(data.password, user.password)) {
        await this.userRepository.update(user.id, { lastAccess: new Date() });
        const accessToken = await this.signToken(user);

        return { user, accessToken, id: user.id };
      } else {
        throw new HttpException({ message: 'Login ou senhas inválidos.' }, HttpStatus.UNAUTHORIZED);
      }
    } catch (error) {
      if (error instanceof HttpException || UnauthorizedException) {
        throw error;
      }
      throw new HttpException({ message: 'Não foi possível realizar o login.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private async signToken(user: UserInterface): Promise<string> {
    const { id, name, registrationNumber, cpf, roles, position } = user;
    const menus = await this.viewMenusByRolesRepository.find({
      where: { roleId: In(roles.map((role: RoleInterface) => role.id)) },
      order: { menu: 'ASC' },
    });
    const rolesId = roles.map((role) => role.id);
    const payload: AuthJwtInterface = {
      id,
      name,
      registrationNumber,
      cpf,
      rolesId,
      menus,
    };
    return this.jwtService.sign(payload);
  }
}
