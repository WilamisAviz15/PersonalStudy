import React from "react";
import logo from "./logo.png";
import search from "./search.png";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo da alura space" />
      <div className={styles.header__container}>
        <input
          className={styles.header__input}
          type="text"
          placeholder="O que você procura?"
        />
        <img src={search} alt="icone de lupa" />
      </div>
    </header>
  );
};

export default Header;
