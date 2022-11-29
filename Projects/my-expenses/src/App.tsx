import Card from "./components/Card";
import CardBalance from "./components/Card/CardBalance";
import Sidebar from "./components/Sidebar";
import styles from "./App.module.scss";
import SimpleCard from "./components/Card/SimpleCard";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <main className={styles.container}>
      <Sidebar />
      <div className={styles.container__content}>
        {/* <SimpleCard />
        <CardBalance /> */}
        <Dashboard />
      </div>
    </main>
  );
}

export default App;
