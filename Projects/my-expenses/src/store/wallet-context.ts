import React from "react";

import { IDialogState } from "shared/interfaces/IDialogState.interface";
import { IEditingState } from "shared/interfaces/IEditingState.interface";
import { ITransactionState } from "shared/interfaces/ITransactionState.interface";
import { IWalletItem } from "shared/interfaces/IWalletItem.interface";

const WalletContext = React.createContext({
  wallets: [] as IWalletItem[],
  dialog: {} as IDialogState,
  editing: {} as IEditingState,
  transaction: {} as ITransactionState,
  addItem: (item: IWalletItem) => {},
  updateItem: (wallet: IWalletItem, index: number) => {},
  removeItem: (id: number) => {},
  handleSetWallets: (wallets: IWalletItem[]) => {},
  updateTransactions: (value: string, idWallet: number) => {},
  handleUpdateBalanceOnWallet: (value: string, idWallet: number) => {},
  handleWalletDialog: (value: boolean, currentWallet?: IWalletItem) => {},
  handleSaveOrUpdateNewWallet: (wallet: IWalletItem) => {},
});

export default WalletContext;
