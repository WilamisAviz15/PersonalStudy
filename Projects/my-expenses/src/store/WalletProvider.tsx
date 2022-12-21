import { useState } from "react";
import { IWalletItem } from "../shared/interfaces/IWalletItem.interface";
import WalletContext from "./wallet-context";

export const WalletContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [wallets, setWallets] = useState<IWalletItem[]>([]);
  const addItem = (item: IWalletItem) => {
    console.log("wallet");
  };

  const updateItem = (id: number) => {
    console.log("wallet");
  };

  const removeItem = (id: number) => {
    console.log("wallet");
  };

  const walletContext = {
    wallets,
    addItem,
    updateItem,
    removeItem,
  };

  return (
    <WalletContext.Provider value={walletContext}>
      {children}
    </WalletContext.Provider>
  );
};

export default WalletContextProvider;
