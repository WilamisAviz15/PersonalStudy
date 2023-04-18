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
import { ViewPrivilegeByRoleInterface } from './../modules/menus/interfaces/view-privilege-by-role.interface';
import { ViewPrivilegesByRolesEntity } from './../modules/users/entities/view-privileges-by-roles.entity';
import { log } from 'console';

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRepository(ViewMenusByRolesEntity)
    private readonly viewMenusByRolesRepository: Repository<ViewMenusByRolesEntity>,

    @InjectRepository(ViewPrivilegesByRolesEntity)
    private readonly viewPrivilegesByRolesRepository: Repository<ViewPrivilegesByRolesEntity>,

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
        delete user.password;

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

  async refreshToken(token: string): Promise<{ accessToken: string; user: UserInterface; id: number }> {
    try {
      if (!this.isTokenValid(token)) {
        throw new HttpException({ message: 'Não foi possível atualizar o token.' }, HttpStatus.INTERNAL_SERVER_ERROR);
      }

      const currentUser = this.jwtService.decode(token) as AuthJwtInterface;
      const user = await this.userRepository.findOne({
        where: { registrationNumber: currentUser.registrationNumber },
        relations: ['roles'],
      });
      const accessToken = await this.signToken(user);
      await this.userRepository.update(
        { registrationNumber: currentUser.registrationNumber },
        { lastAccess: new Date() },
      );

      return { user, accessToken, id: user.id };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException({ message: 'Não foi possível atualizar o token.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getUserPrivileges(rolesId: number[]): Promise<ViewPrivilegeByRoleInterface[]> {
    try {
      return await this.viewPrivilegesByRolesRepository.find({
        where: {
          roleId: In(rolesId),
        },
        select: ['key'],
      });
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível obter os privilégios.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  isTokenValid(token: string): boolean {
    try {
      return !!this.jwtService.verify(token);
    } catch (error) {
      if (error.name === 'JsonWebTokenError') {
        throw new UnauthorizedException('Assinatura Inválida');
      }
      if (error.name === 'TokenExpiredError') {
        throw new UnauthorizedException('Token Expirado');
      }
      throw new UnauthorizedException(error.name);
    }
  }
}
