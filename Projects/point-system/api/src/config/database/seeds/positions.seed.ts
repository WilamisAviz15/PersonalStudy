import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';

import { PositionEntity } from '../../../modules/positions/entities/positions.entity';

export class PositionsSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(PositionEntity);
    await repository.insert([
      { name: 'Desenvolvedor frontend' },
      { name: 'Desenvolvedor fullstack' },
      { name: 'Designer' },
      { name: 'Devops' },
    ]);
  }
}
