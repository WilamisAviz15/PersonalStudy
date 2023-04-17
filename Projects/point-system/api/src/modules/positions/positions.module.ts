import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PositionsService } from './positions.service';
import { PositionsController } from './positions.controller';
import { PositionEntity } from './entities/positions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PositionEntity])],
  controllers: [PositionsController],
  providers: [PositionsService],
})
export class PositionsModule {}
