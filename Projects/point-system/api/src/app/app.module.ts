import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ActionsModule } from '../modules/actions/actions.module';
import { DatabaseModule } from '../modules/database/database.module';
import { MenusGroupsModule } from '../modules/menus-groups/menus-groups.module';
import { MenusModule } from '../modules/menus/menus.module';
import { RolesModule } from '../modules/roles/roles.module';
import { AppointmentTypeModule } from '../modules/appointment-type/appointment-type.module';
import { OccurrencesModule } from '../modules/occurrences/occurrences.module';
import { StatusModule } from '../modules/status/status.module';
import { UsersStatusModule } from '../modules/users-status/users-status.module';
import { WorkdayModule } from '../modules/workday/workday.module';
import { PositionsModule } from '../modules/positions/positions.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    DatabaseModule,
    ActionsModule,
    MenusModule,
    RolesModule,
    MenusGroupsModule,
    AppointmentTypeModule,
    OccurrencesModule,
    StatusModule,
    UsersStatusModule,
    WorkdayModule,
    PositionsModule,
  ],
})
export class AppModule {}
