import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserCreateDto } from './dto/user-create.dto';
import { UserInterface } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post()
  create(@Body() data: UserCreateDto): Promise<{ user: UserInterface; message: string }> {
    return this.service.create(data);
  }

  @Get()
  findAll(): Promise<UserInterface[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<UserInterface> {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: any): Promise<{ user: UserInterface; message: string }> {
    return this.service.update(updateUserDto, id);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<{ message: string }> {
    return this.service.delete(id);
  }
}
