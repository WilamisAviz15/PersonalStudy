import { useState } from "react";
import uuid from "react-uuid";

import { IWalletItem } from "shared/interfaces/IWalletItem.interface";
import WalletContext from "./wallet-context";
import { IDialogState } from "shared/interfaces/IDialogState.interface";
import { IEditingState } from "shared/interfaces/IEditingState.interface";
import { ITransactionState } from "shared/interfaces/ITransactionState.interface";

export const WalletContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [wallets, setWallets] = useState<IWalletItem[]>([]);
  const [isIdEditing, setIsIdEditing] = useState<IWalletItem>();
  const [isValueAddBalance, setIsValueAddBalance] = useState<number>();
  const [openWalletDialog, setOpenWalletDialog] = useState(false);

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

  const removeItem = (id: string) => {
    setWallets((oldWalletData) => {
      oldWalletData = oldWalletData.filter(
        (walletData) => walletData.id !== id
      );
      return oldWalletData;
    });
  };

  const updateTransactions = (value: string, idWallet: number) => {
    setWallets((oldWalletData) => {
      const oldBalance = +oldWalletData[idWallet].balance;
      const newValue = oldBalance + +value;
      oldWalletData[idWallet].balance = newValue.toString();
      oldWalletData[idWallet].transactions.push({
        id: uuid(),
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

  const handleUpdateBalanceOnWallet = (value: string, idWallet: string) => {
    const index = wallets.findIndex((wallet) => wallet.id === idWallet);
    updateTransactions(value, index);
    handleWalletDialog(false);
  };

  const handleWalletDialog = (value: boolean, currentWallet?: IWalletItem) => {
    if (currentWallet) {
      setIsIdEditing(currentWallet);
    } else {
      setIsIdEditing(undefined);
    }
    setIsValueAddBalance(undefined);
    setOpenWalletDialog(value);
  };

  const verifyIndex = (idWallet: string) => {
    return wallets.findIndex((wallet) => wallet.id === idWallet);
  };

  const handleSaveOrUpdateNewWallet = (wallet: IWalletItem) => {
    const isEditing = wallets.find((wallets) => wallets.id === wallet.id);

    if (isEditing) {
      updateItem(wallet, verifyIndex(wallet.id));
      setIsIdEditing(undefined);
    } else {
      addItem(wallet);
    }
    handleWalletDialog(false);
  };

  const walletContext = {
    wallets,
    dialog: {
      openWalletDialog,
      setOpenWalletDialog,
    } as IDialogState,
    editing: {
      isIdEditing,
      setIsIdEditing,
    } as IEditingState,
    transaction: {
      isValueAddBalance,
      setIsValueAddBalance,
    } as ITransactionState,
    addItem,
    updateItem,
    removeItem,
    handleSetWallets,
    updateTransactions,
    handleUpdateBalanceOnWallet,
    handleWalletDialog,
    handleSaveOrUpdateNewWallet,
  };

  return (
    <WalletContext.Provider value={walletContext}>
      {children}
    </WalletContext.Provider>
  );
};

export default WalletContextProvider;