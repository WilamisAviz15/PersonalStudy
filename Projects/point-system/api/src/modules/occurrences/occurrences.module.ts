import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OccurrencesService } from './occurrences.service';
import { OccurrencesController } from './occurrences.controller';
import { OccurrenceEntity } from './entities/occurrence.entity';
import { AuthenticationModule } from './../../authentication/authentication.module';

@Module({
  imports: [AuthenticationModule, TypeOrmModule.forFeature([OccurrenceEntity])],
  controllers: [OccurrencesController],
  providers: [OccurrencesService],
})
export class OccurrencesModule {}
