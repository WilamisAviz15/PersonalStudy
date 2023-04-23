import React from "react";
import Card from "../../components/Card";

import styles from "./Home.module.scss";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  return (
    <main className={styles.container}>
      <Sidebar />
      <div>
        <div>
          <Card type="double" params={{ title: "Registrar entrada", img: "MdLogin" }} />
          <Card type="double" params={{ title: "Registrar saída", img: "MdLogout" }} />
          <Card type="simple" params={{ title: "Horas trabalhadas", description: "18:34" }} />
          <Card type="simple" params={{ title: "Você tem", description: "0 pendências" }} />
        </div>
        <div>
          <Card type="textCard" params={{ description: "00:00:00" }} />
        </div>
      </div>
    </main>
  );
};

export default Home;
