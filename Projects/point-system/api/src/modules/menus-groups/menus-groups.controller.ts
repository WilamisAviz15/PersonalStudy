import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';

import { MenusGroupsService } from './menus-groups.service';
import { MenusGroupCreateDto } from './dto/menus-group-create.dto';
import { MenusGroupUpdateDto } from './dto/menus-group-update.dto';
import { MenusGroupInterface } from './interfaces/menus-group.interface';
import { RoleGuard } from './../../common/guards/auth-guard.guard';

@Controller('menus-groups')
@UseGuards(RoleGuard)
export class MenusGroupsController {
  constructor(private readonly service: MenusGroupsService) {}

  @Post()
  create(@Body() data: MenusGroupCreateDto): Promise<{ menusGroup: MenusGroupInterface; message: string }> {
    return this.service.create(data);
  }

  @Get()
  findAll(): Promise<MenusGroupInterface[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<MenusGroupInterface> {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() data: MenusGroupUpdateDto,
  ): Promise<{ menusGroup: MenusGroupInterface; message: string }> {
    return this.service.update(data, id);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<{ message: string }> {
    return this.service.delete(id);
  }
}
