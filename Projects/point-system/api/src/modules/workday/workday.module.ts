import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WorkdayService } from './workday.service';
import { WorkdayController } from './workday.controller';
import { WorkdayEntity } from './entities/workday.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WorkdayEntity])],
  controllers: [WorkdayController],
  providers: [WorkdayService],
})
export class WorkdayModule {}
