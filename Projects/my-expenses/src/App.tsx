import Sidebar from "./components/Sidebar";
import styles from "./App.module.scss";
import Wallet from "./components/Wallet";
import Transaction from "./components/Transaction";
import { IWalletItem } from "./shared/interfaces/IWalletItem.interface";
import Dialog from "./components/Dialog";
import DialogWallet from "./components/Dialog/DialogWallet";
import { useState } from "react";

function App() {
  const [openWalletDialog, setOpenWalletDialog] = useState(false);

  const handleOpenWalletDialog = (value: boolean) => {
    setOpenWalletDialog(value);
  };
  // const data: IWalletItem[] = [];
  const data: IWalletItem[] = [
    {
      id: "1",
      title: "Netflix",
      balance: "R$ 3.000,00",
      description: "Descricao da caixinha",
      transactions: [
        {
          name: "Netflix",
          currentBalance: "R$ 3.000,00",
          description: "Pay fulana",
          amount: "R$ 29,90",
          date: "01/01/2021",
        },
      ],
      color: "#2196F3",
    },
    {
      id: "2",
      title: "Netflix",
      balance: "R$ 3.000,00",
      description: "Descricao da caixinha",
      transactions: [
        {
          name: "Netflix",
          currentBalance: "R$ 3.000,00",
          description: "Pay fulana",
          amount: "R$ -29,90",
          date: "01/01/2021",
        },
      ],
      color: "#009688",
    },
    {
      id: "3",
      title: "Netflix",
      balance: "R$ 3.000,00",
      description: "Descricao da caixinha",
      transactions: [
        {
          name: "Netflix",
          currentBalance: "R$ 3.000,00",
          description: "Pay fulana",
          amount: "R$ 29,90",
          date: "01/01/2021",
        },
      ],
      color: "",
    },
    {
      id: "4",
      title: "Netflix",
      balance: "R$ 3.000,00",
      description: "Descricao da caixinha",
      transactions: [
        {
          name: "Netflix",
          currentBalance: "R$ 3.000,00",
          description: "Pay fulana",
          amount: "R$ -29,90",
          date: "01/01/2021",
        },
      ],
      color: "#2196F3",
    },
    {
      id: "5",
      title: "Netflix",
      balance: "R$ 3.000,00",
      description: "Descricao da caixinha",
      transactions: [
        {
          name: "Netflix",
          currentBalance: "R$ 3.000,00",
          description: "Pay fulana",
          amount: "R$ 29,90",
          date: "01/01/2021",
        },
      ],
      color: "#009688",
    },
    {
      id: "6",
      title: "Netflix",
      balance: "R$ 3.000,00",
      description: "Descricao da caixinha",
      transactions: [
        {
          name: "Netflix",
          currentBalance: "R$ 3.000,00",
          description: "Pay fulana",
          amount: "R$ -29,90",
          date: "01/01/2021",
        },
      ],
      color: "",
    },
    {
      id: "7",
      title: "Netflix",
      balance: "R$ 3.000,00",
      description: "Descricao da caixinha",
      transactions: [
        {
          name: "Netflix",
          currentBalance: "R$ 3.000,00",
          description: "Pay fulana",
          amount: "R$ 29,90",
          date: "01/01/2021",
        },
      ],
      color: "#2196F3",
    },
    {
      id: "8",
      title: "Netflix",
      balance: "R$ 3.000,00",
      description: "Descricao da caixinha",
      transactions: [
        {
          name: "Netflix",
          currentBalance: "R$ 3.000,00",
          description: "Pay fulana",
          amount: "R$ -29,90",
          date: "01/01/2021",
        },
      ],
      color: "#009688",
    },
    {
      id: "9",
      title: "Netflix",
      balance: "R$ 3.000,00",
      description: "Descricao da caixinha",
      transactions: [
        {
          name: "Netflix",
          currentBalance: "R$ 3.000,00",
          description: "Pay fulana",
          amount: "R$ -29,90",
          date: "01/01/2021",
        },
      ],
      color: "",
    },
    {
      id: "10",
      title: "Netflix",
      balance: "R$ 3.000,00",
      description: "Descricao da caixinha",
      transactions: [
        {
          name: "Netflix",
          currentBalance: "R$ 3.000,00",
          description: "Pay fulana",
          amount: "R$ -29,90",
          date: "01/01/2021",
        },
      ],
      color: "",
    },
    {
      id: "11",
      title: "Netflix",
      balance: "R$ 3.000,00",
      description: "Descricao da caixinha",
      transactions: [
        {
          name: "Netflix",
          currentBalance: "R$ 3.000,00",
          description: "Pay fulana",
          amount: "R$ -29,90",
          date: "01/01/2021",
        },
      ],
      color: "",
    },
    {
      id: "12",
      title: "Netflix",
      balance: "R$ 3.000,00",
      description: "Descricao da caixinha",
      transactions: [
        {
          name: "Netflix",
          currentBalance: "R$ 3.000,00",
          description: "Pay fulana",
          amount: "R$ -29,90",
          date: "01/01/2021",
        },
      ],
      color: "",
    },
  ];
  return (
    <main className={styles.container}>
      <Sidebar />
      <div className={styles.container__content}>
        <Wallet
          data={data}
          onOpenWalletDialog={(value: boolean) => handleOpenWalletDialog(value)}
        />
        <Transaction data={data} />
        {openWalletDialog && (
          <Dialog
            title="Create a wallet"
            onCloseDialog={(value: boolean) => handleOpenWalletDialog(value)}
          >
            <DialogWallet />
          </Dialog>
        )}
      </div>
    </main>
  );
}

export default App;
