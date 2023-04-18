import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { UserEntity } from '../modules/users/entities/user.entity';
import { ViewMenusByRolesEntity } from './../modules/users/entities/view-menu-by-roles.entity';
import { RolesModule } from './../modules/roles/roles.module';
import { UsersModule } from './../modules/users/users.module';
import { JwtStrategy } from './../providers/authentication/jwt.strategy';
import { ViewPrivilegesByRolesEntity } from './../modules/users/entities/view-privileges-by-roles.entity';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    forwardRef(() => RolesModule),
    TypeOrmModule.forFeature([UserEntity, ViewMenusByRolesEntity, ViewPrivilegesByRolesEntity]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.APP_SECRET,
      signOptions: {
        expiresIn: '24h',
        algorithm: 'HS384',
      },
      verifyOptions: {
        algorithms: ['HS384'],
      },
    }),
  ],
  controllers: [AuthenticationController],
  providers: [JwtStrategy, AuthenticationService],
  exports: [AuthenticationService, TypeOrmModule, JwtModule],
})
export class AuthenticationModule {}
