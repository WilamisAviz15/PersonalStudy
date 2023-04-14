import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { MenuCreateDto } from './dto/menu-create.dto';
import { MenuInterface } from './interfaces/menus.interface';
import { MenuEntity } from './entities/menu.entity';
import { ActionEntity } from '../actions/entities/action.entity';
import { PrivilegeEntity } from './entities/privilege.entity';
import { MenuUpdateDto } from './dto/menu-update.dto';
import { ActionsMenuInterface } from '../actions/interfaces/actions-menu.interface';
import { ActionsMenuEntity } from '../actions/entities/action-menu.entity';

@Injectable()
export class MenusService {
  constructor(
    @InjectRepository(MenuEntity)
    private menuRepository: Repository<MenuEntity>,
    @InjectRepository(ActionEntity)
    private actionRepository: Repository<ActionEntity>,
    @InjectRepository(PrivilegeEntity)
    private privilegesRepository: Repository<PrivilegeEntity>,
  ) {}

  async create(data: MenuCreateDto): Promise<{ menu: MenuEntity; message: string }> {
    try {
      const actionsMenus = await this.actionRepository.createQueryBuilder('a').select('id', 'actionId').execute();

      const entity = Object.assign(new MenuEntity(), { ...data, actionsMenus });

      const menu = await this.menuRepository.save(entity);

      return { menu, message: 'O menu foi criado com sucesso.' };
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível criar o menu.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll(): Promise<MenuInterface[]> {
    try {
      return await this.menuRepository.find({ order: { name: 'ASC' }, relations: ['group'] });
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível encontrar os menus.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number): Promise<MenuInterface> {
    try {
      return await this.menuRepository.findOneOrFail({
        where: {
          id,
        },
        relations: ['actionsMenus', 'actionsMenus.privileges', 'actionsMenus.action'],
      });
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível encontrar o menu.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, data: MenuUpdateDto): Promise<{ menu: MenuEntity; message: string }> {
    try {
      const { name, menuGroupId, icon, route, menuKey } = data;
      await this.menuRepository.update(id, {
        name,
        menuGroupId,
        icon,
        route,
        menuKey,
      });
      data?.actionsMenus && (await this.syncPrivileges(data.actionsMenus));

      const menu = await this.menuRepository.findOne({ where: { id } });
      return { menu, message: 'O menu foi atualizado com sucesso.' };
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível atualizar o menu.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async syncPrivileges(data: ActionsMenuInterface[]): Promise<void> {
    try {
      for (const item of data) {
        const entity = Object.assign(new ActionsMenuEntity(), item);
        await this.privilegesRepository.delete({ actionMenuId: entity.id });
        await this.privilegesRepository.insert(entity.privileges);
      }
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível atualizar o menu.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: number): Promise<{ message: string }> {
    try {
      await this.menuRepository.delete(id);

      return { message: 'O menu foi excluído com sucesso.' };
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível excluir o menu.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
