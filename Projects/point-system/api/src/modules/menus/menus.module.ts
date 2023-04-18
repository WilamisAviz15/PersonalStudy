import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MenusService } from './menus.service';
import { MenusController } from './menus.controller';
import { MenuEntity } from './entities/menu.entity';
import { ActionsMenuEntity } from '../actions/entities/action-menu.entity';
import { ActionEntity } from '../actions/entities/action.entity';
import { PrivilegeEntity } from './entities/privilege.entity';
import { AuthenticationModule } from '../../authentication/authentication.module';

@Module({
  imports: [
    AuthenticationModule,
    TypeOrmModule.forFeature([ActionEntity, ActionsMenuEntity, MenuEntity, PrivilegeEntity]),
  ],
  controllers: [MenusController],
  providers: [MenusService],
  //exports menuservice
})
export class MenusModule {}
