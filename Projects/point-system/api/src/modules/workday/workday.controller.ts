import { Controller } from '@nestjs/common';
import { WorkdayService } from './workday.service';

@Controller('workday')
export class WorkdayController {
  constructor(private readonly workdayService: WorkdayService) {}
}
