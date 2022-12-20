import { IWalletItem } from "./IWalletItem.interface";
export interface IUserData {
  id?: string;
  name: string;
  email: string;
  photoURL: string;
  wallets?: IWalletItem[];
}
