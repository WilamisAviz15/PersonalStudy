import { DataSource, DataSourceOptions } from 'typeorm';
import { entities } from './database-entities';
import { MainSeeder } from './main-seeder';
import { SeederOptions } from 'typeorm-extension';

export const typeormOptions: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'point_system',
  entities,
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  synchronize: false,
  logging: false,
  seeds: [MainSeeder],
};

export const AppDataSource = new DataSource(typeormOptions);
