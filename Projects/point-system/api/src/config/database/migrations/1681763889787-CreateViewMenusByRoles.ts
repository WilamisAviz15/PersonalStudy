import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateViewMenusByRoles1681763889787 implements MigrationInterface {
  private viewName = 'view_menus_by_roles';
  private query = `
      SELECT mg.name as 'group', mg.order as 'order', m.name as 'menu', m.route, m.menu_key, m.icon, p.role_id
      FROM privileges p
               INNER JOIN actions_menus am ON am.id = p.action_menu_id and am.action_id = 1
               INNER JOIN menus m ON m.id = am.menu_id
               INNER JOIN menus_groups mg ON mg.id = m.menu_group_id
      GROUP BY p.role_id, m.name, m.route, m.icon, m.menu_key, mg.name, mg.order
      ORDER BY mg.order ASC;
    `;

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE VIEW ${this.viewName} AS ${this.query}`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP VIEW ${this.viewName} AS ${this.query}`);
  }
}
