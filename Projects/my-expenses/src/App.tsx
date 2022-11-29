import Sidebar from "./components/Sidebar";
import styles from "./App.module.scss";
import Balance from "./components/Balance";
import Box from "./components/Box";

function App() {
  return (
    <main className={styles.container}>
      <Sidebar />
      <div className={styles.container__content}>
        {/* <SimpleCard />
        <CardBalance /> */}
        <Balance />
        <Box />
      </div>
    </main>
  );
}

export default App;
