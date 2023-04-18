import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';

import { StatusService } from './status.service';
import { StatusCreateDto } from './dto/status-create.dto';
import { StatusInterface } from './interfaces/status.interface';
import { StatusUpdateDto } from './dto/status-update.dto';
import { RoleGuard } from './../../common/guards/auth-guard.guard';

@Controller('status')
@UseGuards(RoleGuard)
export class StatusController {
  constructor(private readonly service: StatusService) {}
  @Post()
  async create(@Body() data: StatusCreateDto): Promise<{ status: StatusInterface; message: string }> {
    return await this.service.create(data);
  }

  @Get()
  async findAll(): Promise<StatusInterface[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<StatusInterface> {
    return await this.service.findOne(id);
  }

  @Patch(':id')
  async update(
    @Body() data: StatusUpdateDto,
    @Param('id') id: number,
  ): Promise<{ status: StatusInterface; message: string }> {
    return await this.service.update(data, id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<{ message: string }> {
    return this.service.delete(id);
  }
}
