import React from "react";

import styles from "./styles.module.css";
import coloredCircle from "assets/circulo_colorido.png";
import myPicture from "assets/minha_foto.jpg";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, mundo!</h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Wilamis Aviz
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={coloredCircle}
          aria-hidden={true}
        />
        <img
          className={styles.minhaFoto}
          src={myPicture}
          alt="Foto do Wilamis aviz sorrindo pro lado"
          aria-hidden={true}
        />
      </div>
    </div>
  );
};

export default Banner;
