import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';

import { ActionsService } from './actions.service';
import { ActionInterface } from './interfaces/action.interface';
import { ActionCreateDto } from './dtos/action-create.dto';
import { ActionUpdateDto } from './dtos/action-update.dto';
import { RoleGuard } from './../../common/guards/auth-guard.guard';

@Controller('actions')
@UseGuards(RoleGuard)
export class ActionsController {
  constructor(private readonly service: ActionsService) {}

  @Post()
  create(@Body() data: ActionCreateDto): Promise<{ action: ActionInterface; message: string }> {
    return this.service.create(data);
  }

  @Get()
  async findAll(): Promise<ActionInterface[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<ActionInterface> {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(
    @Body() data: ActionUpdateDto,
    @Param('id') id: number,
  ): Promise<{ action: ActionInterface; message: string }> {
    return this.service.update(data, id);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<{ message: string }> {
    return this.service.delete(id);
  }
}
