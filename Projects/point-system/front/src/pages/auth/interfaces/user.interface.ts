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
