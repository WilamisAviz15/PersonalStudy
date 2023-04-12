import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { AppointmentTypeEntity } from './entities/appointment-type.entity';
import { AppointmentTypeCreateDto } from './dto/appointment-type-create.dto';
import { MenuEntity } from '../menus/entities/menu.entity';
import { ActionsMenuEntity } from '../actions/entities/action-menu.entity';
import { AppointmentTypeUpdateDto } from './dto/appointment-type-update.dto';
import { PrivilegeEntity } from '../menus/entities/privilege.entity';
import { AppointmentTypeInterface } from './interfaces/AppointmentType.interface';

@Injectable()
export class AppointmentTypeService {
  constructor(
    @InjectRepository(AppointmentTypeEntity)
    private readonly appointmentTypeRepository: Repository<AppointmentTypeEntity>,
    @InjectRepository(MenuEntity)
    private readonly menuRepository: Repository<MenuEntity>,
    @InjectRepository(ActionsMenuEntity)
    private readonly actionsMenuRepository: Repository<ActionsMenuEntity>,
    @InjectRepository(PrivilegeEntity)
    private readonly privilegeRepository: Repository<PrivilegeEntity>,
  ) {}
  async create(data: AppointmentTypeCreateDto) {
    try {
      const entity = Object.assign(new AppointmentTypeEntity(), data);
      const appointmentType = await this.appointmentTypeRepository.save(entity);
      const menus = await this.menuRepository.find();
      const actionsMenuCreate = menus.map((menu) => ({ actionId: appointmentType.id, menuId: menu.id }));
      await this.actionsMenuRepository.save(actionsMenuCreate);

      return { appointmentType, message: 'O tipo de marcação foi criado com sucesso.' };
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível criar o tipo de marcação.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(): Promise<AppointmentTypeInterface[]> {
    try {
      return await this.appointmentTypeRepository.find({ order: { id: 'ASC' } });
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível encontrar os tipos de marcações.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number): Promise<AppointmentTypeInterface> {
    try {
      return await this.appointmentTypeRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível encontrar os tipo de marcação.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(
    data: AppointmentTypeUpdateDto,
    id: number,
  ): Promise<{ appointmentType: AppointmentTypeInterface; message: string }> {
    try {
      const entity = Object.assign(new AppointmentTypeEntity(), data);
      await this.appointmentTypeRepository.save(entity);
      const appointmentType = await this.appointmentTypeRepository.findOne({ where: { id } });
      return { appointmentType, message: 'O tipo de marcação foi atualizado com sucesso.' };
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível atualizar o tipo de marcação.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async delete(id: number): Promise<{ message: string }> {
    try {
      const appointmentTypeMenu = await this.actionsMenuRepository.find({ where: { actionId: id } });
      await this.privilegeRepository.delete({ actionMenuId: In(appointmentTypeMenu.map((item) => item.id)) });
      await this.actionsMenuRepository.delete({ actionId: id });
      await this.appointmentTypeRepository.delete(id);

      return { message: 'O tipo de marcação foi removido com sucesso.' };
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível excluir o tipo de marçação.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
