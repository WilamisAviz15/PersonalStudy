import React from "react";
import { IWalletItem } from "../shared/interfaces/IWalletItem.interface";

const CartContext = React.createContext({
  wallets: [],
  addItem: (item: IWalletItem) => {},
  updateItem: (id: number) => {},
  removeItem: (id: number) => {},
});

export default CartContext;
