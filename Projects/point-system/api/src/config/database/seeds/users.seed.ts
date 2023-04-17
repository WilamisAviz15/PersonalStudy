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
        password: '$2b$10$7QbLyGyyszkfKGMfqHTHou1SZ4KWN0GGM.Mvmy4XEQiLigiJHRRhO',
        cpf: '11111111111',
      },
      {
        id: 2,
        name: 'Colaborador Teste',
        registrationNumber: '20220002',
        password: '$2b$10$7QbLyGyyszkfKGMfqHTHou1SZ4KWN0GGM.Mvmy4XEQiLigiJHRRhO',
        cpf: '22222222222',
      },
    ]);
  }
}
