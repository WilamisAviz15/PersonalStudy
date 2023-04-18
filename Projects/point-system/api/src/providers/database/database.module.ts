import { Module } from '@nestjs/common';
import { AppDataSource } from '../../config/database/data-source';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource.options)],
})
export class DatabaseModule {}
