import Sidebar from "./components/Sidebar";
import styles from "./App.module.scss";
import Wallet from "./components/Wallet";
import Transaction from "./components/Transaction";
import { IWalletItem } from "./shared/interfaces/IWalletItem.interface";
import Dialog from "./components/Dialog";
import { useEffect, useState } from "react";
import { getIndex, setIndex } from "./services/app.service";

function App() {
  let id = 0;
  const [isIdEditing, setIsIdEditing] = useState<IWalletItem>();
  const [openWalletDialog, setOpenWalletDialog] = useState(false);
  const [walletData, setWalletData] = useState<IWalletItem[]>([]);

  useEffect(() => {
    id = getIndex();
  }, []);

  const handleWalletDialog = (value: boolean, currentWallet?: IWalletItem) => {
    if (currentWallet) {
      setIsIdEditing(currentWallet);
    } else {
      setIsIdEditing(undefined);
    }

    setOpenWalletDialog(value);
  };

  const handleSaveNewWallet = (wallet: IWalletItem) => {
    const isEditing = walletData.find((wallets) => wallets.id === wallet.id);

    if (isEditing) {
      console.log("editing:", isEditing);
      setWalletData((oldWalletData) => {
        oldWalletData[+wallet.id] = wallet;
        return oldWalletData;
      });
      setIsIdEditing(undefined);
    } else {
      const { title, description, color, balance } = wallet;
      const newWallet: IWalletItem = {
        id: setIndex().toString(),
        title,
        description,
        color,
        balance,
        transactions: [],
      };

      setWalletData((oldWalletData) => [...oldWalletData, newWallet]);
    }
    handleWalletDialog(false);
  };

  return (
    <main className={styles.container}>
      <Sidebar />
      <div className={styles.container__content}>
        <Wallet
          data={walletData}
          onOpenWalletDialog={(value: boolean, currentWallet?: IWalletItem) =>
            handleWalletDialog(value, currentWallet)
          }
        />
        <Transaction data={walletData} />
        {openWalletDialog && (
          <Dialog
            title="Create a wallet"
            wallet={isIdEditing}
            onCloseDialog={(value: boolean) => handleWalletDialog(value)}
            saveNewWallet={(wallet: IWalletItem) => handleSaveNewWallet(wallet)}
          />
        )}
        {/* {openAddBalanceDialog && (
          <Dialog
            title="Add value"
            onCloseDialog={(value: boolean) => handleWalletDialog(value)}
            updateWallet={(wallet: IWalletItem) => updateWallet(wallet)}
          />
        )} */}
      </div>
    </main>
  );
}

export default App;
