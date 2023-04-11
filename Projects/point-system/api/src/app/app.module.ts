import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ActionsModule } from '../modules/actions/actions.module';
import { DatabaseModule } from '../modules/database/database.module';
import { MenusGroupsModule } from '../modules/menus-groups/menus-groups.module';
import { MenusModule } from '../modules/menus/menus.module';
import { RolesModule } from '../modules/roles/roles.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    DatabaseModule,
    ActionsModule,
    MenusModule,
    RolesModule,
    MenusGroupsModule,
  ],
})
export class AppModule {}
