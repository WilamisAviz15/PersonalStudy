import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MenusGroupsService } from './menus-groups.service';
import { MenusGroupsController } from './menus-groups.controller';
import { MenusGroupEntity } from './entities/menus-group.entity';
import { AuthenticationModule } from './../../authentication/authentication.module';

@Module({
  imports: [AuthenticationModule, TypeOrmModule.forFeature([MenusGroupEntity])],
  controllers: [MenusGroupsController],
  providers: [MenusGroupsService],
})
export class MenusGroupsModule {}
