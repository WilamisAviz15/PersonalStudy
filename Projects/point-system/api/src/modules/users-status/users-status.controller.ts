import { Controller } from '@nestjs/common';
import { UsersStatusService } from './users-status.service';

@Controller('users-status')
export class UsersStatusController {
  constructor(private readonly usersStatusService: UsersStatusService) {}
}
