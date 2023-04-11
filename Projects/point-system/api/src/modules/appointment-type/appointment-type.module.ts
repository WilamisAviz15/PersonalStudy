import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppointmentTypeService } from './appointment-type.service';
import { AppointmentTypeController } from './appointment-type.controller';
import { AppointmentTypeEntity } from './entities/appointment-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AppointmentTypeEntity])],
  controllers: [AppointmentTypeController],
  providers: [AppointmentTypeService],
})
export class AppointmentTypeModule {}
