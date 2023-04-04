import { DataSource, DataSourceOptions } from 'typeorm';
import { entities } from './database-entities';

export const typeormOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'my_expenses',
  entities,
  synchronize: true,
};

export const AppDataSource = new DataSource(typeormOptions);
