import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { PositionEntity } from './entities/positions.entity';
import { MenusGroupEntity } from '../menus-groups/entities/menus-group.entity';
import { PositionCreateDto } from './dto/position-create.dto';
import { PositionInterface } from './interfaces/Position.interface';
import { PositionUpdateDto } from './dto/position-update.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PositionsService {
  constructor(
    @InjectRepository(PositionEntity)
    private readonly positionRepository: Repository<PositionEntity>,
  ) {}

  async create(data: PositionCreateDto): Promise<{ position: PositionInterface; message: string }> {
    try {
      const entity = Object.assign(new MenusGroupEntity(), data);
      const position = await this.positionRepository.save(entity);

      return { position, message: 'A posição foi criada com sucesso.' };
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível criar a posição.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll(): Promise<PositionInterface[]> {
    try {
      return await this.positionRepository.find({ order: { name: 'ASC' } });
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível encontrar as posições.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number): Promise<PositionInterface> {
    try {
      return await this.positionRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível encontrar a posição.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(data: PositionUpdateDto, id: number): Promise<{ position: PositionInterface; message: string }> {
    try {
      const entity = Object.assign(new MenusGroupEntity(), data);
      await this.positionRepository.save(entity);

      const position = await this.positionRepository.findOne({ where: { id } });
      return { position, message: 'A posição foi atualizada com sucesso.' };
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível atualizar a posição.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: number): Promise<{ message: string }> {
    try {
      await this.positionRepository.softDelete(id);
      return { message: 'A posição foi removida com sucesso.' };
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível excluir a posição.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
