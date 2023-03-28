import { IWalletContext } from "./interfaces/IWalletContext.interface";
import React from "react";

import { IDialogState } from "shared/interfaces/IDialogState.interface";
import { IEditingState } from "shared/interfaces/IEditingState.interface";
import { ITransactionState } from "shared/interfaces/ITransactionState.interface";
import { IWalletItem } from "shared/interfaces/IWalletItem.interface";

const WalletContext = React.createContext<IWalletContext>({
  wallets: [] as IWalletItem[],
  dialog: {} as IDialogState,
  editing: {} as IEditingState,
  transaction: {} as ITransactionState,
  addItem: (item: IWalletItem) => {},
  updateItem: (wallet: IWalletItem, index: number) => {},
  removeItem: (id: string) => {},
  handleSetWallets: (wallets: IWalletItem[]) => {},
  updateTransactions: (value: string, idWallet: number) => {},
  handleUpdateBalanceOnWallet: (value: string, idWallet: string) => {},
  handleWalletDialog: (value: boolean, currentWallet?: IWalletItem) => {},
  handleSaveOrUpdateNewWallet: (wallet: IWalletItem) => {},
});

export default WalletContext;