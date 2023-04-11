import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';

import { AppointmentTypeEntity } from '../../../modules/appointment-type/entities/appointment-type.entity';

export class AppointmentTypeSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(AppointmentTypeEntity);
    await repository.insert([{ name: 'Entrada' }, { name: 'Intervalo' }, { name: 'Fim Intervalo' }, { name: 'Saída' }]);
  }
}
