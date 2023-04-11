import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppointmentTypeService } from './appointment-type.service';
import { CreateAppointmentTypeDto } from './dto/create-appointment-type.dto';

@Controller('appointment-type')
export class AppointmentTypeController {
  constructor(private readonly appointmentTypeService: AppointmentTypeService) {}

  @Post()
  create(@Body() createAppointmentTypeDto: CreateAppointmentTypeDto) {
    return this.appointmentTypeService.create(createAppointmentTypeDto);
  }

  @Get()
  findAll() {
    return this.appointmentTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppointmentTypeDto: any) {
    return this.appointmentTypeService.update(+id, updateAppointmentTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentTypeService.remove(+id);
  }
}
