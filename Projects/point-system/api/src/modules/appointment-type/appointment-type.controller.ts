import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';

import { AppointmentTypeService } from './appointment-type.service';
import { AppointmentTypeCreateDto } from './dto/appointment-type-create.dto';
import { AppointmentTypeUpdateDto } from './dto/appointment-type-update.dto';
import { AppointmentTypeInterface } from './interfaces/AppointmentType.interface';
import { RoleGuard } from './../../common/guards/auth-guard.guard';

@Controller('appointment-type')
@UseGuards(RoleGuard)
export class AppointmentTypeController {
  constructor(private readonly service: AppointmentTypeService) {}

  @Post()
  create(
    @Body() data: AppointmentTypeCreateDto,
  ): Promise<{ appointmentType: AppointmentTypeInterface; message: string }> {
    return this.service.create(data);
  }

  @Get()
  findAll(): Promise<AppointmentTypeInterface[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<AppointmentTypeInterface> {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(
    @Body() data: AppointmentTypeUpdateDto,
    @Param('id') id: number,
  ): Promise<{ appointmentType: AppointmentTypeInterface; message: string }> {
    return this.service.update(data, id);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<{ message: string }> {
    return this.service.delete(id);
  }
}
