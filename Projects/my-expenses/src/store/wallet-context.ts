import React from "react";
import { IWalletItem } from "../shared/interfaces/IWalletItem.interface";

const WalletContext = React.createContext({
  wallets: [] as IWalletItem[],
  addItem: (item: IWalletItem) => {},
  updateItem: (wallet: IWalletItem, index: number) => {},
  removeItem: (id: number) => {},
  handleSetWallets: (wallets: IWalletItem[]) => {},
  updateTransactions: (value: string, idWallet: number) => {},
});

export default WalletContext;
