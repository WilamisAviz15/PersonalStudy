import React from "react";
import styles from "./styles.module.css";
import { ReactComponent as MarcaRegistrada } from "assets/marca_registrada.svg";

const Footer = () => {
  return (
    <footer className={styles.rodape}>
      <MarcaRegistrada />
      Desenvolvido por Wilamis Aviz.
    </footer>
  );
};

export default Footer;
