import { Injectable } from '@nestjs/common';
import { CreateMenusGroupDto } from './dto/create-menus-group.dto';

@Injectable()
export class MenusGroupsService {
  create(createMenusGroupDto: CreateMenusGroupDto) {
    return 'This action adds a new menusGroup';
  }

  findAll() {
    return `This action returns all menusGroups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menusGroup`;
  }

  update(id: number, updateMenusGroupDto: any) {
    return `This action updates a #${id} menusGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} menusGroup`;
  }
}
