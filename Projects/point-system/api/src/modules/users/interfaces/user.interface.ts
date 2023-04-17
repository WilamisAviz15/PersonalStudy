import { PositionInterface } from './../../positions/interfaces/position.interface';
import { RoleInterface } from './../../roles/interfaces/role.interface';

export interface UserInterface {
  id: number;
  registrationNumber: string;
  name: string;
  cpf: string;
  position?: PositionInterface;
  roles?: RoleInterface[];
  lastAccess?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
