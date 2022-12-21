import React from "react";
import { IWalletItem } from "../shared/interfaces/IWalletItem.interface";

const WalletContext = React.createContext({
  wallets: [] as IWalletItem[],
  addItem: (item: IWalletItem) => {},
  updateItem: (id: number) => {},
  removeItem: (id: number) => {},
  handleSetWallets: (wallets: IWalletItem[]) => {},
});

export default WalletContext;
