import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { OccurrenceEntity } from './entities/occurrence.entity';
import { OccurrenceCreateDto } from './dto/occurrence-create.dto';
import { OccurrenceInterface } from './interfaces/occurrence.interface';
import { OccurrenceUpdateDto } from './dto/occurrence-update.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OccurrencesService {
  constructor(
    @InjectRepository(OccurrenceEntity)
    private readonly occurrenceRepository: Repository<OccurrenceEntity>,
  ) {}

  async create(data: OccurrenceCreateDto): Promise<{ occurrence: OccurrenceInterface; message: string }> {
    try {
      const entity = Object.assign(new OccurrenceEntity(), data);
      const occurrence = await this.occurrenceRepository.save(entity);

      return { occurrence, message: 'A ocorrência foi criada com sucesso.' };
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível criar a ocorrência.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll(): Promise<OccurrenceInterface[]> {
    try {
      return await this.occurrenceRepository.find({ order: { name: 'ASC' } });
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível encontrar as ocorrências.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number): Promise<OccurrenceInterface> {
    try {
      return await this.occurrenceRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível encontrar a ocorrência.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(data: OccurrenceUpdateDto, id: number): Promise<{ occurrence: OccurrenceInterface; message: string }> {
    try {
      const entity = Object.assign(new OccurrenceEntity(), data);
      await this.occurrenceRepository.save(entity);

      const occurrence = await this.occurrenceRepository.findOne({ where: { id } });
      return { occurrence, message: 'A ocorrência foi atualizada com sucesso.' };
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível atualizar a ocorrência.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async delete(id: number): Promise<{ message: string }> {
    try {
      await this.occurrenceRepository.softDelete(id);
      return { message: 'A ocorrência foi removida com sucesso.' };
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível excluir a ocorrência.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
