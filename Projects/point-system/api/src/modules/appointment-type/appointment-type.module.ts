import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppointmentTypeService } from './appointment-type.service';
import { AppointmentTypeController } from './appointment-type.controller';
import { AppointmentTypeEntity } from './entities/appointment-type.entity';
import { ActionsMenuEntity } from '../actions/entities/action-menu.entity';
import { MenuEntity } from '../menus/entities/menu.entity';
import { PrivilegeEntity } from '../menus/entities/privilege.entity';
import { AuthenticationModule } from './../../authentication/authentication.module';

@Module({
  imports: [
    forwardRef(() => AuthenticationModule),
    TypeOrmModule.forFeature([AppointmentTypeEntity, ActionsMenuEntity, MenuEntity, PrivilegeEntity]),
  ],
  controllers: [AppointmentTypeController],
  providers: [AppointmentTypeService],
})
export class AppointmentTypeModule {}
