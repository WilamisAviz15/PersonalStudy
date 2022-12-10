import Sidebar from "./components/Sidebar";
import styles from "./App.module.scss";
import Wallet from "./components/Wallet";
import Transaction from "./components/Transaction";
import { IWalletItem } from "./shared/interfaces/IWalletItem.interface";
import Dialog from "./components/Dialog";
import { useState } from "react";
import { IWalletData } from "./shared/interfaces/IWalletData.interface";

function App() {
  let id = 0;
  const [isIdEditing, setIsIdEditing] = useState<number>();
  const [openWalletDialog, setOpenWalletDialog] = useState(false);
  const [walletData, setWalletData] = useState<IWalletItem[]>([
    // {
    //   id: "1",
    //   balance: "0",
    //   color: "color-1",
    //   description: "test",
    //   title: "natal",
    //   transactions: [],
    // },
    // {
    //   id: "2",
    //   balance: "0",
    //   color: "color-1",
    //   description: "test",
    //   title: "natal",
    //   transactions: [],
    // },
    // {
    //   id: "3",
    //   balance: "0",
    //   color: "color-1",
    //   description: "test",
    //   title: "natal",
    //   transactions: [],
    // },
    // {
    //   id: "4",
    //   balance: "0",
    //   color: "color-1",
    //   description: "test",
    //   title: "natal",
    //   transactions: [],
    // },
    // {
    //   id: "5",
    //   balance: "0",
    //   color: "color-1",
    //   description: "test",
    //   title: "natal",
    //   transactions: [],
    // },
    // {
    //   id: "6",
    //   balance: "0",
    //   color: "color-1",
    //   description: "test",
    //   title: "natal",
    //   transactions: [],
    // },
  ]);

  const handleWalletDialog = (value: boolean, id?: string) => {
    if (id) {
      setIsIdEditing(+id);
      console.log(isIdEditing);
    }

    setOpenWalletDialog(value);
  };

  const updateWallet = (wallet: IWalletItem) => {
    console.log(wallet);
    // setWalletData((walletData) => ({
    //   name: walletData.name,
    //   description: walletData.description,
    //   selectedColor: walletData.selectedColor,
    //   value: value,
    // }));
  };

  const handleSaveNewWallet = (wallet: IWalletItem) => {
    const { title, description, color, balance } = wallet;
    const newWallet: IWalletItem = {
      id: (id++).toString(),
      title,
      description,
      color,
      balance,
      transactions: [],
    };
    setWalletData((oldWalletData) => [...oldWalletData, newWallet]);
    handleWalletDialog(false);
  };

  const isEditing = (): IWalletItem | undefined => {
    const a = isIdEditing ? walletData[isIdEditing] : undefined;
    console.log(a);
    return isIdEditing ? walletData[isIdEditing] : undefined;
  };

  return (
    <main className={styles.container}>
      <Sidebar />
      <div className={styles.container__content}>
        <Wallet
          data={walletData}
          onOpenWalletDialog={(value: boolean, id?: string) =>
            handleWalletDialog(value, id)
          }
        />
        <Transaction data={walletData} />
        {openWalletDialog && (
          <Dialog
            title="Create a wallet"
            wallet={isEditing()}
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
