import Sidebar from "./components/Sidebar";
import styles from "./App.module.scss";
import Balance from "./components/Balance";
import Transaction from "./components/Transaction";

function App() {
  return (
    <main className={styles.container}>
      <Sidebar />
      <div className={styles.container__content}>
        {/* <SimpleCard />
        <CardBalance /> */}
        <Balance />
        <Transaction />
      </div>
    </main>
  );
}

export default App;
