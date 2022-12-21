import { IWalletItem } from "./IWalletItem.interface";

export interface IPropsWallet {
  data: IWalletItem[];
  onOpenWalletDialog: (value: boolean, currentWallet?: IWalletItem) => void;
}
