import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';

import { UsersStatusEntity } from '../../../modules/users-status/entities/users-status.entity';

export class UsersStatusSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(UsersStatusEntity);
    await repository.insert([{ name: 'Ativo' }, { name: 'Inativo' }]);
  }
}
