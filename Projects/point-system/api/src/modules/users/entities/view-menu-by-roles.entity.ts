import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({ name: 'view_menus_by_roles' })
export class ViewMenusByRolesEntity {
  @ViewColumn()
  group: string;

  @ViewColumn()
  order: number;

  @ViewColumn()
  menu: string;

  @ViewColumn()
  route: string;

  @ViewColumn()
  icon: string;

  @ViewColumn({ name: 'menu_key' })
  menuKey: string;

  @ViewColumn({ name: 'role_id' })
  roleId: number;
}
