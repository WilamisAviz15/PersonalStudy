import { Injectable } from '@nestjs/common';

@Injectable()
export class ActionsService {
  create(createActionDto: any) {
    return 'This action adds a new action';
  }

  findAll() {
    return `This action returns all actions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} action`;
  }

  update(id: number, updateActionDto: any) {
    return `This action updates a #${id} action`;
  }

  remove(id: number) {
    return `This action removes a #${id} action`;
  }
}
