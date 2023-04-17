import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { StatusEntity } from './entities/status.entity';
import { StatusCreateDto } from './dto/status-create.dto';
import { StatusInterface } from './interfaces/status.interface';
import { StatusUpdateDto } from './dto/status-update.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(StatusEntity)
    private readonly statusRepository: Repository<StatusEntity>,
  ) {}

  async create(data: StatusCreateDto): Promise<{ status: StatusInterface; message: string }> {
    try {
      const entity = Object.assign(new StatusEntity(), data);
      const status = await this.statusRepository.save(entity);

      return { status, message: 'O status foi criado com sucesso.' };
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível criar o status.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll(): Promise<StatusInterface[]> {
    try {
      return await this.statusRepository.find({ order: { name: 'ASC' } });
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível encontrar os status.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number): Promise<StatusInterface> {
    try {
      return await this.statusRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível encontrar o status.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(data: StatusUpdateDto, id: number): Promise<{ status: StatusInterface; message: string }> {
    try {
      const entity = Object.assign(new StatusEntity(), data);
      await this.statusRepository.save(entity);

      const status = await this.statusRepository.findOne({ where: { id } });
      return { status, message: 'O status foi atualizada com sucesso.' };
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível atualizar o status.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: number): Promise<{ message: string }> {
    try {
      await this.statusRepository.delete(id);
      return { message: 'O status foi removido com sucesso' };
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível excluir o status.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
