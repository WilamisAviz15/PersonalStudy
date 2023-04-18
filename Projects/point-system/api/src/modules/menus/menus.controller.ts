import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';

import { MenusService } from './menus.service';
import { MenuInterface } from './interfaces/menus.interface';
import { MenuCreateDto } from './dto/menu-create.dto';
import { MenuUpdateDto } from './dto/menu-update.dto';
import { RoleGuard } from './../../common/guards/auth-guard.guard';

@Controller('menus')
@UseGuards(RoleGuard)
export class MenusController {
  constructor(private readonly menusService: MenusService) {}

  @Post()
  async create(@Body() menuCreate: MenuCreateDto): Promise<{ menu: MenuInterface; message: string }> {
    return this.menusService.create(menuCreate);
  }

  @Get()
  async findAll(): Promise<MenuInterface[]> {
    return this.menusService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<MenuInterface> {
    return this.menusService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() menuUpdate: MenuUpdateDto,
  ): Promise<{ menu: MenuInterface; message: string }> {
    return this.menusService.update(id, menuUpdate);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.menusService.delete(+id);
  }
}
