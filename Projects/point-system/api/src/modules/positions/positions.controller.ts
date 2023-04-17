import { Body, Controller, Get, Post, Patch, Param, Delete } from '@nestjs/common';

import { PositionsService } from './positions.service';
import { PositionCreateDto } from './dto/position-create.dto';
import { PositionInterface } from './interfaces/Position.interface';
import { PositionUpdateDto } from './dto/position-update.dto';

@Controller('positions')
export class PositionsController {
  constructor(private readonly service: PositionsService) {}

  @Post()
  async create(@Body() data: PositionCreateDto): Promise<{ position: PositionInterface; message: string }> {
    return await this.service.create(data);
  }

  @Get()
  async findAll(): Promise<PositionInterface[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<PositionInterface> {
    return await this.service.findOne(id);
  }

  @Patch(':id')
  async update(
    @Body() data: PositionUpdateDto,
    @Param('id') id: number,
  ): Promise<{ position: PositionInterface; message: string }> {
    return await this.service.update(data, id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<{ message: string }> {
    return this.service.delete(id);
  }
}
