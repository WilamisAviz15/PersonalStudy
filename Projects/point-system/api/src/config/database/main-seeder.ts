import { DataSource } from 'typeorm';
import { Seeder, runSeeders } from 'typeorm-extension';

import { ActionsSeed } from './seeds/actions.seed';
import { MenuGroupsSeed } from './seeds/menu-groups.seed';
import { MenusSeed } from './seeds/menus.seeds';
import { RolesSeed } from './seeds/roles.seed';
import { ActionsMenuSeed } from './seeds/action-menus.seed';
import { PrivilegesSeed } from './seeds/privileges.seed';
import { AppointmentTypeSeed } from './seeds/appointment-type.seed';
import { OccurrencesSeed } from './seeds/ccurrences.seed';
import { StatusSeed } from './seeds/status.seed';
import { UsersStatusSeed } from './seeds/users-status.seed';
import { WorkdaySeed } from './seeds/workday.seed';
import { PositionsSeed } from './seeds/positions.seed';
import { UsersSeed } from './seeds/users.seed';
import { UsersRolesSeed } from './seeds/users-roles.seed';

export class MainSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    await runSeeders(dataSource, {
      seeds: [
        ActionsSeed,
        MenuGroupsSeed,
        MenusSeed,
        RolesSeed,
        ActionsMenuSeed,
        PrivilegesSeed,
        AppointmentTypeSeed,
        OccurrencesSeed,
        StatusSeed,
        UsersStatusSeed,
        WorkdaySeed,
        PositionsSeed,
        UsersSeed,
        UsersRolesSeed,
      ],
    });
  }
}
