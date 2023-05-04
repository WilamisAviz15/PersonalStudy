export interface UserInterface {
  id?: number;
  registrationNumber: string;
  name: string;
  cpf: string;
  position?: any;
  roles?: any[];
  lastAccess?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface UserInfoInterface {
  id: number;
  cpf: string;
  exp: number;
  iat: number;
  menus: any[];
  name: string;
  registrationNumber: string;
  rolesId: number[];
}
