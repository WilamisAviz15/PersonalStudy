import { IDialogState } from "shared/interfaces/IDialogState.interface";
import { IEditingState } from "shared/interfaces/IEditingState.interface";
import { ITransactionState } from "shared/interfaces/ITransactionState.interface";
import { IWalletItem } from "shared/interfaces/IWalletItem.interface";

export interface IWalletContext {
  wallets: IWalletItem[];
  dialog: IDialogState;
  editing: IEditingState;
  transaction: ITransactionState;
  addItem: (item: IWalletItem) => void;
  updateItem: (wallet: IWalletItem, index: number) => void;
  removeItem: (id: string) => void;
  handleSetWallets: (wallets: IWalletItem[]) => void;
  updateTransactions: (value: string, idWallet: number) => void;
  handleUpdateBalanceOnWallet: (value: string, idWallet: string) => void;
  handleWalletDialog: (value: boolean, currentWallet?: IWalletItem) => void;
  handleSaveOrUpdateNewWallet: (wallet: IWalletItem) => void;
}
