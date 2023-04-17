import { ViewMenuByRoleInterface } from '../../modules/menus/interfaces/view-menu-by-role.interface';

export interface AuthJwtInterface {
  id: number;
  name: string;
  registrationNumber: string;
  cpf: string;
  positionId?: number;
  rolesId?: number[];
  accessToken?: string;
  refreshToken?: string;
  menus: ViewMenuByRoleInterface[];
}
