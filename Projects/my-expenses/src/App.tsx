import Sidebar from "./components/Sidebar";
import styles from "./App.module.scss";
import Balance from "./components/Balance";
import Transaction from "./components/Transaction";
import { IWalletItem } from "./shared/interfaces/IWalletItem.interface";

function App() {
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
      id: "1",
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
      id: "2",
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
      id: "3",
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
          amount: "R$ -29,90",
          date: "01/01/2021",
        },
      ],
      color: "",
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
          amount: "R$ -29,90",
          date: "01/01/2021",
        },
      ],
      color: "",
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
          amount: "R$ -29,90",
          date: "01/01/2021",
        },
      ],
      color: "",
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
        {/* <SimpleCard />
        <CardBalance /> */}
        <Balance data={data} />
        <Transaction data={data} />
      </div>
    </main>
  );
}

export default App;
