import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({ name: 'view_privileges_by_roles' })
export class ViewPrivilegesByRolesEntity {
  @ViewColumn({ name: 'action_id' })
  actionId: number;

  @ViewColumn({ name: 'role_id' })
  roleId: number;

  @ViewColumn()
  key: string;

  @ViewColumn()
  menu: string;

  @ViewColumn()
  route: string;
}
