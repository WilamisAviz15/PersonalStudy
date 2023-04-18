import { Module } from '@nestjs/common';

import { ActionsModule } from '../modules/actions/actions.module';
import { DatabaseModule } from '../providers/database/database.module';
import { MenusGroupsModule } from '../modules/menus-groups/menus-groups.module';
import { MenusModule } from '../modules/menus/menus.module';
import { RolesModule } from '../modules/roles/roles.module';
import { AppointmentTypeModule } from '../modules/appointment-type/appointment-type.module';
import { OccurrencesModule } from '../modules/occurrences/occurrences.module';
import { StatusModule } from '../modules/status/status.module';
import { UsersStatusModule } from '../modules/users-status/users-status.module';
import { WorkdayModule } from '../modules/workday/workday.module';
import { PositionsModule } from '../modules/positions/positions.module';
import { UsersModule } from '../modules/users/users.module';
import { AuthenticationModule } from './../authentication/authentication.module';
import { ConfigProvidersModule } from './../providers/enviroment/enviroment.module';
import { ProfileModule } from '../modules/profile/profile.module';

@Module({
  imports: [
    ConfigProvidersModule,
    DatabaseModule,
    AuthenticationModule,
    ActionsModule,
    MenusModule,
    AppointmentTypeModule,
    RolesModule,
    MenusGroupsModule,
    OccurrencesModule,
    StatusModule,
    UsersStatusModule,
    WorkdayModule,
    PositionsModule,
    ProfileModule,
    UsersModule,
  ],
})
export class AppModule {}
