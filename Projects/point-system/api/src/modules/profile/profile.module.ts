import { Module } from '@nestjs/common';

import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { AuthenticationModule } from './../../authentication/authentication.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../users/entities/user.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [AuthenticationModule, TypeOrmModule.forFeature([UserEntity]), UsersModule],
  controllers: [ProfileController],
  providers: [ProfileService],
  exports: [ProfileService],
})
export class ProfileModule {}
