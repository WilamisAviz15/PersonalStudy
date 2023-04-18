import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { RoleEntity } from '../roles/entities/role.entity';
import { RolesModule } from '../roles/roles.module';
import { UserEntity } from './entities/user.entity';
import { AuthenticationModule } from './../../authentication/authentication.module';

@Module({
  imports: [forwardRef(() => AuthenticationModule), RolesModule, TypeOrmModule.forFeature([UserEntity, RoleEntity])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
