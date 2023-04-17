import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { OccurrencesService } from './occurrences.service';
import { OccurrenceCreateDto } from './dto/occurrence-create.dto';
import { OccurrenceInterface } from './interfaces/occurrence.interface';
import { OccurrenceUpdateDto } from './dto/occurrence-update.dto';

@Controller('occurrences')
export class OccurrencesController {
  constructor(private readonly service: OccurrencesService) {}

  @Post()
  create(@Body() data: OccurrenceCreateDto): Promise<{ occurrence: OccurrenceInterface; message: string }> {
    return this.service.create(data);
  }

  @Get()
  findAll(): Promise<OccurrenceInterface[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<OccurrenceInterface> {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() data: OccurrenceUpdateDto,
  ): Promise<{ occurrence: OccurrenceInterface; message: string }> {
    return this.service.update(data, id);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<{ message: string }> {
    return this.service.delete(id);
  }
}
