import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WorkdayService } from './workday.service';
import { WorkdayController } from './workday.controller';
import { WorkdayEntity } from './entities/workday.entity';
import { AuthenticationModule } from './../../authentication/authentication.module';

@Module({
  imports: [AuthenticationModule, TypeOrmModule.forFeature([WorkdayEntity])],
  controllers: [WorkdayController],
  providers: [WorkdayService],
})
export class WorkdayModule {}
