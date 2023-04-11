import { Injectable } from '@nestjs/common';
import { CreateAppointmentTypeDto } from './dto/create-appointment-type.dto';

@Injectable()
export class AppointmentTypeService {
  create(createAppointmentTypeDto: CreateAppointmentTypeDto) {
    return 'This action adds a new appointmentType';
  }

  findAll() {
    return `This action returns all appointmentType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appointmentType`;
  }

  update(id: number, updateAppointmentTypeDto: any) {
    return `This action updates a #${id} appointmentType`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointmentType`;
  }
}
