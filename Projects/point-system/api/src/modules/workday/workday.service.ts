import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { WorkdayEntity } from './entities/workday.entity';
import { WorkdayCreateDto } from './dto/workday-create.dto';
import { WorkdayInterface } from './interfaces/workday.interface';
import { WorkdayUpdateDto } from './dto/workday-update.dto';

@Injectable()
export class WorkdayService {
  constructor(
    @InjectRepository(WorkdayEntity)
    private readonly workdayRepository: Repository<WorkdayEntity>,
  ) {}

  async create(data: WorkdayCreateDto): Promise<{ workday: WorkdayInterface; message: string }> {
    try {
      const entity = Object.assign(new WorkdayEntity(), data);
      const workday = await this.workdayRepository.save(entity);

      return { workday, message: 'A jornada de trabalho foi criada com sucesso.' };
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível criar a jornada de trabalho.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(): Promise<WorkdayInterface[]> {
    try {
      return await this.workdayRepository.find({ order: { name: 'ASC' } });
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível encontrar as jornadas de trabalho.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number): Promise<WorkdayInterface> {
    try {
      return await this.workdayRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível encontrar a jornada de trabalho.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(data: WorkdayUpdateDto, id: number): Promise<{ workday: WorkdayInterface; message: string }> {
    try {
      const entity = Object.assign(new WorkdayEntity(), data);
      await this.workdayRepository.save(entity);

      const workday = await this.workdayRepository.findOne({ where: { id } });
      return { workday, message: 'A jornada de trabalho foi atualizada com sucesso.' };
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível atualizar a jornada de trabalho.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async delete(id: number): Promise<{ message: string }> {
    try {
      await this.workdayRepository.delete(id);
      return { message: 'A jornada de trabalho foi removida com sucesso' };
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível excluir a jornada de trabalho .' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
