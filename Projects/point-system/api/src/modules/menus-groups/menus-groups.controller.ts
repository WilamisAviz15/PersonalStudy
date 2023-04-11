import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenusGroupsService } from './menus-groups.service';
import { CreateMenusGroupDto } from './dto/create-menus-group.dto';

@Controller('menus-groups')
export class MenusGroupsController {
  constructor(private readonly menusGroupsService: MenusGroupsService) {}

  @Post()
  create(@Body() createMenusGroupDto: CreateMenusGroupDto) {
    return this.menusGroupsService.create(createMenusGroupDto);
  }

  @Get()
  findAll() {
    return this.menusGroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menusGroupsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenusGroupDto: any) {
    return this.menusGroupsService.update(+id, updateMenusGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menusGroupsService.remove(+id);
  }
}
