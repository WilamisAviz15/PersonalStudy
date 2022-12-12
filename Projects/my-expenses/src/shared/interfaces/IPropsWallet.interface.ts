import { IWalletItem } from "./IWalletItem.interface";

export interface IPropsWallet {
  data: IWalletItem[];
  onOpenWalletDialog: (value: boolean, currentWallet?: IWalletItem) => void;
  onDeleteWallet?: (id: number) => void;
  onAddBalanceOnWallet?: (id: number) => void;
}
