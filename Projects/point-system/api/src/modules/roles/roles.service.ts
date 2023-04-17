import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { RoleEntity } from './entities/role.entity';
import { RoleCreateDto } from './dto/role-create.dto';
import { RoleInterface } from './interfaces/role.interface';
import { RoleUpdateDto } from './dto/role-update.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly rolesRepository: Repository<RoleEntity>,
  ) {}

  async create(data: RoleCreateDto): Promise<{ role: RoleInterface; message: string }> {
    try {
      const entity = Object.assign(new RoleEntity(), data);
      const role = await this.rolesRepository.save(entity);

      return { role, message: 'O perfil de acesso foi criado com sucesso.' };
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível criar o perfil de acesso.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(): Promise<RoleInterface[]> {
    try {
      return await this.rolesRepository.find();
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível encontrar os perfis de acesso.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number): Promise<RoleInterface> {
    try {
      return await this.rolesRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível encontrar o perfil de acesso.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(data: RoleUpdateDto, id: number): Promise<{ role: RoleInterface; message: string }> {
    try {
      const entity = Object.assign(new RoleEntity(), data);

      await this.rolesRepository.save(entity);

      const role = await this.rolesRepository.findOne({ where: { id } });
      return { role, message: 'O perfil de acesso foi atualizado com sucesso.' };
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível atualizar o perfil de acesso.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async delete(id: number): Promise<{ message: string }> {
    try {
      await this.rolesRepository.delete(id);
      return { message: 'O perfil de acesso foi removido com sucesso' };
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível excluir o perfil de acesso.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
