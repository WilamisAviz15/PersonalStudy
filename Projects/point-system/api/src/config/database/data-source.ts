import { DataSource, DataSourceOptions } from 'typeorm';
import { entities } from './database-entities';

export const typeormOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'point_system',
  entities,
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  synchronize: false,
};

export const AppDataSource = new DataSource(typeormOptions);
