import { Module } from '@nestjs/common';
import { UsersStatusService } from './users-status.service';
import { UsersStatusController } from './users-status.controller';

@Module({
  controllers: [UsersStatusController],
  providers: [UsersStatusService]
})
export class UsersStatusModule {}
