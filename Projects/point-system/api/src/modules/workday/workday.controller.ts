import { Controller, Post, Get, Patch, Delete, Body, Param, UseGuards } from '@nestjs/common';

import { WorkdayService } from './workday.service';
import { WorkdayCreateDto } from './dto/workday-create.dto';
import { WorkdayInterface } from './interfaces/workday.interface';
import { WorkdayUpdateDto } from './dto/workday-update.dto';
import { RoleGuard } from './../../common/guards/auth-guard.guard';

@Controller('workday')
@UseGuards(RoleGuard)
export class WorkdayController {
  constructor(private readonly service: WorkdayService) {}

  @Post()
  async create(@Body() data: WorkdayCreateDto): Promise<{ workday: WorkdayInterface; message: string }> {
    return await this.service.create(data);
  }

  @Get()
  async findAll(): Promise<WorkdayInterface[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<WorkdayInterface> {
    return await this.service.findOne(id);
  }

  @Patch(':id')
  async update(
    @Body() data: WorkdayUpdateDto,
    @Param('id') id: number,
  ): Promise<{ workday: WorkdayInterface; message: string }> {
    return await this.service.update(data, id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<{ message: string }> {
    return this.service.delete(id);
  }
}
