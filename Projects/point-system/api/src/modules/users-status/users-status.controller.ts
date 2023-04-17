import { Body, Controller, Post, Get, Patch, Delete, Param } from '@nestjs/common';

import { UsersStatusService } from './users-status.service';
import { UserStatusCreateDto } from './dto/users-status-create.dto';
import { UserStatusInterface } from './interfaces/user-status.interface';
import { UserStatusUpdateDto } from './dto/users-status-update.dto';

@Controller('users-status')
export class UsersStatusController {
  constructor(private readonly service: UsersStatusService) {}

  @Post()
  async create(@Body() data: UserStatusCreateDto): Promise<{ usersStatus: UserStatusInterface; message: string }> {
    return await this.service.create(data);
  }

  @Get()
  async findAll(): Promise<UserStatusInterface[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<UserStatusInterface> {
    return await this.service.findOne(id);
  }

  @Patch(':id')
  async update(
    @Body() data: UserStatusUpdateDto,
    @Param('id') id: number,
  ): Promise<{ usersStatus: UserStatusInterface; message: string }> {
    return await this.service.update(data, id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<{ message: string }> {
    return this.service.delete(id);
  }
}
