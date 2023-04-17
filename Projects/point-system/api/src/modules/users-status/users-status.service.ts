import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { StatusEntity } from '../status/entities/status.entity';
import { UsersStatusEntity } from './entities/users-status.entity';
import { UserStatusInterface } from './interfaces/user-status.interface';
import { UserStatusCreateDto } from './dto/users-status-create.dto';
import { UserStatusUpdateDto } from './dto/users-status-update.dto';

@Injectable()
export class UsersStatusService {
  constructor(
    @InjectRepository(UsersStatusEntity)
    private readonly usersStatusRepository: Repository<UsersStatusEntity>,
  ) {}

  async create(data: UserStatusCreateDto): Promise<{ usersStatus: UserStatusInterface; message: string }> {
    try {
      const entity = Object.assign(new UsersStatusEntity(), data);
      const usersStatus = await this.usersStatusRepository.save(entity);

      return { usersStatus, message: 'O status de usuário foi criado com sucesso.' };
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível criar o status de usuário.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(): Promise<UserStatusInterface[]> {
    try {
      return await this.usersStatusRepository.find({ order: { name: 'ASC' } });
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível encontrar os status de usuário.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number): Promise<UserStatusInterface> {
    try {
      return await this.usersStatusRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível encontrar o status de usuário.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(data: UserStatusUpdateDto, id: number): Promise<{ usersStatus: UserStatusInterface; message: string }> {
    try {
      const entity = Object.assign(new StatusEntity(), data);
      await this.usersStatusRepository.save(entity);

      const usersStatus = await this.usersStatusRepository.findOne({ where: { id } });
      return { usersStatus, message: 'O status de usuário foi atualizada com sucesso.' };
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível atualizar o status de usuário.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async delete(id: number): Promise<{ message: string }> {
    try {
      await this.usersStatusRepository.delete(id);
      return { message: 'O status de usuário foi removido com sucesso' };
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível excluir o status de usuário.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
