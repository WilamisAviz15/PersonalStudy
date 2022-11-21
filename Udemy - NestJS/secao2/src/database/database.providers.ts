import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { User } from '../auth/user.entity';
import { Task } from '../tasks/task.entity';

@Injectable()
export class DatabaseProvider implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.configService.get('DB_HOST'),
      port: this.configService.get('DB_PORT'),
      username: this.configService.get('DB_USERNAME'),
      database: this.configService.get('DB_DATABASE'),
      password: this.configService.get('DB_PASSWORD'),
      entities: [Task, User],
      synchronize: true,
      logging: false,
    };
  }
}
