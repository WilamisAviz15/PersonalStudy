import { IWalletItem } from "./IWalletItem.interface";
export interface IPropsDialog {
  title: string;
  wallet?: IWalletItem;
  onCloseDialog: (value: boolean) => void;
  saveNewWallet?: (wallet: any) => void;
  updateWallet?: (wallet: any) => void;
  children?: React.ReactNode;
}
