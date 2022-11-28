import Card from "./components/Card";
import CardBalance from "./components/Card/CardBalance";
import Sidebar from "./components/Sidebar";
import styles from "./App.module.scss";
import SimpleCard from "./components/Card/SimpleCard";

function App() {
  return (
    <main className={styles.container}>
      <Sidebar />
      <div className={styles.container__content}>
        <SimpleCard />
        {/* <CardBalance /> */}
      </div>
    </main>
  );
}

export default App;
