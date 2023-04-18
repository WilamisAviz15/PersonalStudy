import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersStatusService } from './users-status.service';
import { UsersStatusController } from './users-status.controller';
import { UsersStatusEntity } from './entities/users-status.entity';
import { AuthenticationModule } from './../../authentication/authentication.module';

@Module({
  imports: [AuthenticationModule, TypeOrmModule.forFeature([UsersStatusEntity])],
  controllers: [UsersStatusController],
  providers: [UsersStatusService],
})
export class UsersStatusModule {}
