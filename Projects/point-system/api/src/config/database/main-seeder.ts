import { DataSource } from 'typeorm';
import { Seeder, runSeeders } from 'typeorm-extension';
import { ActionsSeed } from './seeds/actions.seed';
import { MenuGroupsSeed } from './seeds/menu-groups.seed';
import { MenusSeed } from './seeds/menus.seeds';
import { RolesSeed } from './seeds/roles.seed';
import { ActionsMenuSeed } from './seeds/action-menus.seed';
import { PrivilegesSeed } from './seeds/privileges.seed';

export class MainSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    await runSeeders(dataSource, {
      seeds: [ActionsSeed, MenuGroupsSeed, MenusSeed, RolesSeed, ActionsMenuSeed, PrivilegesSeed],
    });
  }
}
