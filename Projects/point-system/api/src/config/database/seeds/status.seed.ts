import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';

import { StatusEntity } from '../../../modules/status/entities/status.entity';

export class StatusSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(StatusEntity);
    await repository.insert([{ name: 'Deferido' }, { name: 'Pendente' }, { name: 'Indeferido' }]);
  }
}
