import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';

import { WorkdayEntity } from '../../../modules/workday/entities/workday.entity';

export class WorkdaySeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(WorkdayEntity);
    await repository.insert([{ name: '40 horas' }, { name: '44 horas' }]);
  }
}
