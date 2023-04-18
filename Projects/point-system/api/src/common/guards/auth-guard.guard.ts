import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

import { AuthenticationService } from '../../authentication/authentication.service';

@Injectable()
export class RoleGuard extends AuthGuard('jwt') {
  constructor(
    private readonly authService: AuthenticationService,
    private readonly jwtService: JwtService,
    private reflector: Reflector,
  ) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const token = request.headers.authorization.replace('Bearer ', '');
      const user = this.jwtService.verify(token);
      request.user = user;
      const role: string = this.reflector.get<string>('', context.getHandler());
      const privileges = await this.authService.getUserPrivileges(user.rolesId);

      if (!user || (role && !privileges.find((el) => el.key === role))) {
        new UnauthorizedException('Não autorizado.');
      }

      return !!user;
    } catch (error) {
      throw new UnauthorizedException('Não autorizado.');
    }
  }
}
