import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Task } from './task.entity';
import { TasksService } from './tasks.service';

describe('TasksService', () => {
  let tasksService: TasksService;
  let tasksRepository: Repository<Task>;

  const mockTasksRepository = {
    find: jest.fn(),
    createQueryBuilder: jest.fn().mockReturnValue('task'),
  };

  const mockRepository = {
    createQueryBuilder: jest.fn(() => ({
      where: jest.fn().mockReturnThis(),
      andWhere: jest.fn().mockReturnThis(),
    })),
  };
  const mockUser = {
    username: 'test',
    password: 'test',
    id: '1',
    tasks: [],
  };
  beforeEach(async () => {
    //initialize a NestJS module with taskService and taskRepository
    const module = await Test.createTestingModule({
      imports: [],
      providers: [
        TasksService,
        {
          provide: getRepositoryToken(Task),
          useValue: mockTasksRepository,
        },
      ],
    }).compile();

    tasksService = module.get<TasksService>(TasksService);
    tasksRepository = module.get<Repository<Task>>(getRepositoryToken(Task));
  });

  describe('getTasks', () => {
    it('calls TasksRepository.getTasks and return the result', () => {
      expect(tasksRepository.createQueryBuilder).not.toHaveBeenCalled();
      const result = tasksService.getTasks(null, mockUser);
      expect(tasksRepository.createQueryBuilder).toHaveBeenCalledWith('task');
      //   expect(result).toBe([]);
    });
  });
});
