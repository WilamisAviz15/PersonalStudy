import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MenusGroupCreateDto } from './dto/menus-group-create.dto';
import { MenusGroupEntity } from './entities/menus-group.entity';
import { Repository } from 'typeorm';
import { MenusGroupInterface } from './interfaces/menus-group.interface';
import { MenusGroupUpdateDto } from './dto/menus-group-update.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MenusGroupsService {
  constructor(
    @InjectRepository(MenusGroupEntity)
    private readonly menusGroupsRepository: Repository<MenusGroupEntity>,
  ) {}

  async create(body: MenusGroupCreateDto): Promise<{ menusGroup: MenusGroupInterface; message: string }> {
    try {
      const entity = Object.assign(new MenusGroupEntity(), body);
      const menusGroup = await this.menusGroupsRepository.save(entity);

      return { menusGroup, message: 'O grupo de menus foi criado com sucesso.' };
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível criar o grupo de menus.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(): Promise<MenusGroupInterface[]> {
    try {
      return await this.menusGroupsRepository.find({ order: { name: 'ASC', order: 'DESC' } });
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível encontrar os grupos de menus.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number): Promise<MenusGroupInterface> {
    try {
      return await this.menusGroupsRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível encontrar o grupo de menus.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(body: MenusGroupUpdateDto, id: number): Promise<{ menusGroup: MenusGroupInterface; message: string }> {
    try {
      const entity = Object.assign(new MenusGroupEntity(), body);
      console.log(entity);
      await this.menusGroupsRepository.save(entity);

      const menusGroup = await this.menusGroupsRepository.findOne({ where: { id } });
      return { menusGroup, message: 'O grupo de menus foi atualizado com sucesso.' };
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível atualizar o grupo de menus.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async delete(id: number): Promise<{ message: string }> {
    try {
      await this.menusGroupsRepository.softDelete(id);
      return { message: 'O grupo de menus foi removido com sucesso.' };
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível excluir o grupo de menus.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
