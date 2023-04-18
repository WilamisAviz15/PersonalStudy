import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';

import { RolesService } from './roles.service';
import { RoleCreateDto } from './dto/role-create.dto';
import { RoleInterface } from './interfaces/role.interface';
import { RoleUpdateDto } from './dto/role-update.dto';
import { RoleGuard } from './../../common/guards/auth-guard.guard';

@Controller('roles')
@UseGuards(RoleGuard)
export class RolesController {
  constructor(private readonly service: RolesService) {}

  @Post()
  async create(@Body() data: RoleCreateDto): Promise<{ role: RoleInterface; message: string }> {
    return await this.service.create(data);
  }

  @Get()
  async findAll(): Promise<RoleInterface[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<RoleInterface> {
    return await this.service.findOne(id);
  }

  @Patch(':id')
  async update(
    @Body() data: RoleUpdateDto,
    @Param('id') id: number,
  ): Promise<{ role: RoleInterface; message: string }> {
    return await this.service.update(data, id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<{ message: string }> {
    return this.service.delete(id);
  }
}
