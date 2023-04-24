import React from "react";
import Card from "../../components/Card";

import styles from "./Home.module.scss";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  return (
    <main>
      <Sidebar />
      <div className={styles.container}>
        <div className={styles.container__list__cards}>
          <Card type="double" params={{ title: "Registrar entrada", img: "MdLogin" }} />
          <Card type="double" params={{ title: "Registrar saída", img: "MdLogout" }} />
          <Card type="simple" params={{ title: "Horas trabalhadas", description: "18:34" }} />
          <Card type="simple" params={{ title: "Você tem", description: "0 pendências" }} />
        </div>
        <div className={styles.container__cards__countdown}>
          <Card type="textCard" params={{ description: "00:00:00" }} />
        </div>
      </div>
    </main>
  );
};

export default Home;
