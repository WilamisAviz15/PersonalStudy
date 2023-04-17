import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';

import { UserEntity } from './../../../modules/users/entities/user.entity';

export class UsersSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(UserEntity);
    await repository.insert([
      {
        id: 1,
        name: 'Administrador',
        registrationNumber: '20220001',
        password: '123',
        cpf: '11111111111',
      },
    ]);
  }
}
