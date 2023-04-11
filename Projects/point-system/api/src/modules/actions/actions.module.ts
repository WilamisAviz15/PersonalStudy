import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ActionsService } from './actions.service';
import { ActionsController } from './actions.controller';
import { MenuEntity } from '../menus/entities/menu.entity';
import { PrivilegeEntity } from '../menus/entities/privilege.entity';
import { ActionsMenuEntity } from './entities/action-menu.entity';
import { ActionEntity } from './entities/action.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ActionEntity, ActionsMenuEntity, MenuEntity, PrivilegeEntity])],
  controllers: [ActionsController],
  providers: [ActionsService],
})
export class ActionsModule {}
