/* eslint-disable max-len */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { Task } from 'src/tasks/task.entity';

export const mySqlConfigService: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'task_management',
  entities: [Task, User],
  synchronize: true,
  logging: false,
};
