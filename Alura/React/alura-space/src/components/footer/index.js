import React from "react";

import styles from "./styles.module.scss";
import facebookImg from "./facebook.svg";
import twitterImg from "./twitter.svg";
import instagramImg from "./instagram.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__icons}>
        <a href="#" rel="noreferrer">
          <img src={facebookImg} alt="Logo do facebook" />
        </a>
        <a href="#" rel="noreferrer">
          <img src={twitterImg} alt="Logo do instagram" />
        </a>
        <a href="#" rel="noreferrer">
          <img src={instagramImg} alt="Logo do facebook" />
        </a>
      </div>
      <p>Desenvolvidor por Wilamis Aviz</p>
    </footer>
  );
};

export default Footer;
