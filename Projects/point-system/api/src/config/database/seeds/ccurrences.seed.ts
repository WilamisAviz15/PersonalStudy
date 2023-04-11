import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';

import { OccurrenceEntity } from '../../../modules/occurrences/entities/occurrence.entity';

export class OccurrencesSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(OccurrenceEntity);
    await repository.insert([{ name: 'Ajuste no ponto' }]);
  }
}
