import { Test, TestingModule } from '@nestjs/testing';
import { UsersStatusService } from './users-status.service';

describe('UsersStatusService', () => {
  let service: UsersStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersStatusService],
    }).compile();

    service = module.get<UsersStatusService>(UsersStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
