import { IWalletItem } from "./IWalletItem.interface";
export interface IPropsDialog {
  title: string;
  wallet?: IWalletItem;
  isValueAddBalance?: number | undefined;
  children?: React.ReactNode;
  onCloseDialog: (value: boolean) => void;
  saveNewWallet?: (wallet: any) => void;
  updateWallet?: (wallet: any) => void;
  updateBalanceOnWallet?: (value: string, id: number) => void;
}
