import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { MenuEntity } from '../../../modules/menus/entities/menu.entity';

export class MenusSeed implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const repository = dataSource.getRepository(MenuEntity);
    await repository.insert([
      {
        name: 'Início',
        route: '',
        menuKey: 'inicio',
        menuGroupId: 1,
      },
      {
        name: 'Marcações',
        route: 'marcacoes',
        menuKey: 'appointments',
        menuGroupId: 1,
      },
      {
        name: 'Perfil',
        route: 'perfil',
        menuKey: 'profile',
        menuGroupId: 1,
      },
      {
        name: 'Colaboradores',
        route: 'colaboradores',
        menuKey: 'employees',
        menuGroupId: 2,
      },
      {
        name: 'Ajuste de ponto',
        route: 'ajuste-de-ponto',
        menuKey: 'point-adjust',
        menuGroupId: 2,
      },
      {
        name: 'Marcação dos Colaboradores',
        route: 'marcacao-dos-colaboradores',
        menuKey: 'employees-appointment',
        menuGroupId: 2,
      },
      {
        name: 'Tipo de Marcação',
        route: 'tipo-de-marcacao',
        menuKey: 'appointment-type',
        menuGroupId: 2,
      },
      {
        name: 'Ocorrências',
        route: 'ocorrencias',
        menuKey: 'occurrences',
        menuGroupId: 2,
      },
      {
        name: 'Status',
        route: 'status',
        menuKey: 'status',
        menuGroupId: 2,
      },
      {
        name: 'Status de Usuários',
        route: 'status-de-usuarios',
        menuKey: 'users-status',
        menuGroupId: 2,
      },
      {
        name: 'Posição',
        route: 'posicao',
        menuKey: 'position',
        menuGroupId: 2,
      },
      {
        name: 'Jornada de trabalho',
        route: 'jornada-de-trabalho',
        menuKey: 'workday',
        menuGroupId: 2,
      },
      {
        name: 'Ações',
        route: 'acoes',
        menuKey: 'actions',
        menuGroupId: 3,
      },
      {
        name: 'Grupos de menus',
        route: 'grupos-de-menus',
        menuKey: 'menus-group',
        menuGroupId: 3,
      },
      {
        name: 'Menus',
        route: 'menus',
        menuKey: 'menus',
        menuGroupId: 3,
      },
      {
        name: 'Usuários',
        route: 'usuarios',
        menuKey: 'users',
        menuGroupId: 3,
      },
      {
        name: 'Perfis de acesso',
        route: 'perfis-de-acesso',
        menuKey: 'access-profile',
        menuGroupId: 3,
      },
    ]);
  }
}
