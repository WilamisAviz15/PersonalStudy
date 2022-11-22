import React from "react";
import Gallery from "components/gallery";

import Header from "components/header";
import Menu from "components/menu";
import Popular from "components/popular";
import banner from "./banner.png";
import styles from "./styles.module.scss";
import Footer from "components/footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className={styles.wrapper}>
          <Menu />
          <div className={styles.wrapper__image}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="A imagem da terra vista do espaço" />
          </div>
        </section>
        <div className={styles.gallery}>
          <Gallery />
          <Popular />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
