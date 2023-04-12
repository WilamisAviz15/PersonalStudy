import { MenuInterface } from './../../menus/interfaces/menus.interface';
import { ActionInterface } from './action.interface';

export interface ActionsMenuInterface {
  id?: number;
  actionId: number;
  menuId: number;
  menu?: MenuInterface;
  action?: ActionInterface;
  // privileges?: PrivilegeInterface[];
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
