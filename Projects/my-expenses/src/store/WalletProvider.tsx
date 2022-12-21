import { useState } from "react";
import { IWalletItem } from "../shared/interfaces/IWalletItem.interface";
import WalletContext from "./wallet-context";
import uuid from "react-uuid";

export const WalletContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [wallets, setWallets] = useState<IWalletItem[]>([]);

  const addItem = (item: IWalletItem) => {
    item.id = uuid();
    setWallets((oldWalletData) => [...oldWalletData, item]);
  };

  const updateItem = (wallet: IWalletItem, index: number) => {
    setWallets((oldWalletData) => {
      oldWalletData[index] = wallet;
      return oldWalletData;
    });
  };

  const removeItem = (id: number) => {
    setWallets((oldWalletData) => {
      oldWalletData = oldWalletData.filter(
        (walletData) => +walletData.id !== id
      );
      return oldWalletData;
    });
  };

  //TODO: MELHORAR
  const updateTransactions = (value: string, idWallet: number) => {
    setWallets((oldWalletData) => {
      const oldBalance = +oldWalletData[idWallet].balance;
      const newValue = oldBalance + +value;
      oldWalletData[idWallet].balance = newValue.toString();
      oldWalletData[idWallet].transactions.push({
        name: oldWalletData[idWallet].title,
        amount: value,
        currentBalance: oldWalletData[idWallet].balance,
        date: new Date().toLocaleDateString(),
        description: "test",
      });
      return oldWalletData;
    });
  };

  const handleSetWallets = (wallets: IWalletItem[]) => {
    setWallets(wallets);
  };

  const walletContext = {
    wallets,
    addItem,
    updateItem,
    removeItem,
    handleSetWallets,
    updateTransactions,
  };

  return (
    <WalletContext.Provider value={walletContext}>
      {children}
    </WalletContext.Provider>
  );
};

export default WalletContextProvider;
