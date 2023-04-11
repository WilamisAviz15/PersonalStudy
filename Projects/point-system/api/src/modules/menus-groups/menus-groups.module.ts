import { Module } from '@nestjs/common';
import { MenusGroupsService } from './menus-groups.service';
import { MenusGroupsController } from './menus-groups.controller';
import { MenusGroupEntity } from './entities/menus-group.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MenusGroupEntity])],
  controllers: [MenusGroupsController],
  providers: [MenusGroupsService],
})
export class MenusGroupsModule {}
