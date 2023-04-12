import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ActionInterface } from './interfaces/action.interface';
import { ActionEntity } from './entities/action.entity';
import { PrivilegeEntity } from '../menus/entities/privilege.entity';
import { ActionsMenuEntity } from './entities/action-menu.entity';
import { ActionCreateDto } from './dtos/action-create.dto';
import { MenuEntity } from '../menus/entities/menu.entity';
import { ActionUpdateDto } from './dtos/action-update.dto';

@Injectable()
export class ActionsService {
  constructor(
    @InjectRepository(ActionEntity)
    private readonly actionsRepository: Repository<ActionEntity>,
    @InjectRepository(ActionsMenuEntity)
    private readonly actionsMenuRepository: Repository<ActionsMenuEntity>,
    @InjectRepository(MenuEntity)
    private readonly menuRepository: Repository<MenuEntity>,
    @InjectRepository(PrivilegeEntity)
    private readonly privilegeRepository: Repository<PrivilegeEntity>,
  ) {}

  async create(data: ActionCreateDto) {
    try {
      const entity = Object.assign(new ActionEntity(), data);
      const action = await this.actionsRepository.save(entity);
      const menus = await this.menuRepository.find();
      const actionsMenuCreate = menus.map((menu) => ({ actionId: action.id, menuId: menu.id }));
      await this.actionsMenuRepository.save(actionsMenuCreate);

      return { action, message: 'A ação foi criada com sucesso.' };
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível criar a ação.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll(): Promise<ActionInterface[]> {
    try {
      return await this.actionsRepository.find({ order: { id: 'ASC' } });
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível encontrar as ações.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number): Promise<ActionEntity> {
    try {
      return await this.actionsRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível encontrar a ação.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(data: ActionUpdateDto, id: number): Promise<{ action: ActionInterface; message: string }> {
    try {
      const entity = Object.assign(new ActionEntity(), data);
      await this.actionsRepository.save(entity);

      const action = await this.actionsRepository.findOne({ where: { id } });
      return { action, message: 'A ação foi atualizada com sucesso.' };
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível atualizar a ação.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: number): Promise<{ message: string }> {
    try {
      const actionsMenu = await this.actionsMenuRepository.find({ where: { actionId: id } });
      await this.privilegeRepository.delete({ actionMenuId: In(actionsMenu.map((item) => item.id)) });
      await this.actionsMenuRepository.delete({ actionId: id });
      await this.actionsRepository.delete(id);

      return { message: 'A ação foi removida com sucesso.' };
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível excluir a ação.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
