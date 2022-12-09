import Sidebar from "./components/Sidebar";
import styles from "./App.module.scss";
import Wallet from "./components/Wallet";
import Transaction from "./components/Transaction";
import { IWalletItem } from "./shared/interfaces/IWalletItem.interface";
import Dialog from "./components/Dialog";
import { useState } from "react";
import { IWalletData } from "./shared/interfaces/IWalletData.interface";

function App() {
  let id = 1;
  const [openWalletDialog, setOpenWalletDialog] = useState(false);
  const [walletData, setWalletData] = useState<IWalletItem[]>([]);

  const handleWalletDialog = (value: boolean) => {
    setOpenWalletDialog(value);
  };

  const handleSaveNewWallet = (wallet: IWalletData) => {
    const { name, description, selectedColor, value } = wallet;
    const newWallet: IWalletItem = {
      id: (++id).toString(),
      title: name,
      description,
      color: selectedColor,
      balance: value,
      transactions: [],
    };
    setWalletData((oldWalletData) => [...oldWalletData, newWallet]);
    handleWalletDialog(false);
  };

  return (
    <main className={styles.container}>
      <Sidebar />
      <div className={styles.container__content}>
        <Wallet
          data={walletData}
          onOpenWalletDialog={(value: boolean) => handleWalletDialog(value)}
        />
        <Transaction data={walletData} />
        {openWalletDialog && (
          <Dialog
            title="Create a wallet"
            onCloseDialog={(value: boolean) => handleWalletDialog(value)}
            saveNewWallet={(wallet: any) => handleSaveNewWallet(wallet)}
          />
        )}
      </div>
    </main>
  );
}

export default App;
