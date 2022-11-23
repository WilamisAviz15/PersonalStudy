import React from "react";
import { Link, useLocation } from "react-router-dom";
import MenuLink from "../MenuLink";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About Me</MenuLink>
      </nav>
    </header>
  );
};

export default Header;
