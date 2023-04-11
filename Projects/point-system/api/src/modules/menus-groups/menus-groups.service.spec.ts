import { Test, TestingModule } from '@nestjs/testing';
import { MenusGroupsService } from './menus-groups.service';

describe('MenusGroupsService', () => {
  let service: MenusGroupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenusGroupsService],
    }).compile();

    service = module.get<MenusGroupsService>(MenusGroupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
