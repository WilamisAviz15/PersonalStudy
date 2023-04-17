import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { UserCreateDto } from './dto/user-create.dto';
import { UserEntity } from './entities/user.entity';
import { UserInterface } from './interfaces/user.interface';
import { UserUpdateDto } from './dto/user-update.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(data: UserCreateDto): Promise<{ user: UserInterface; message: string }> {
    try {
      //hash
      const salt = bcrypt.genSaltSync();
      data.password = bcrypt.hashSync(data.password, salt);
      const entity = Object.assign(new UserEntity(), data);
      const user = await this.userRepository.save(entity);

      return { user, message: 'O usuário foi criado com sucesso.' };
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível criar o usuário.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll(): Promise<UserInterface[]> {
    try {
      return await this.userRepository.find();
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível encontrar os usuários.' }, HttpStatus.NOT_FOUND);
    }
  }

  async findOne(id: number): Promise<UserInterface> {
    try {
      return await this.userRepository.findOne({
        where: { id },
        relations: ['roles'],
      });
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível encontrar o usuário.' }, HttpStatus.NOT_FOUND);
    }
  }

  async update(data: UserUpdateDto, id: number): Promise<{ user: UserInterface; message: string }> {
    try {
      const entity = Object.assign(new UserEntity(), data);
      await this.userRepository.save(entity);

      const user = await this.userRepository.findOne({ where: { id } });
      return { user, message: 'O usuário foi atualizada com sucesso.' };
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível atualizar o usuário.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: number): Promise<{ message: string }> {
    try {
      await this.userRepository.delete(id);
      return { message: 'O usuário foi removido com sucesso' };
    } catch (error) {
      throw new HttpException({ message: 'Não foi possível excluir o usuário.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
