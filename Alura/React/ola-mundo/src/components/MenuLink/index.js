import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.css";

const MenuLink = ({ children, to }) => {
  const location = useLocation();

  return (
    <Link
      className={`${styles.link} ${
        location.pathname === to ? styles.linkActive : ""
      }`}
      to={to}
    >
      {children}
    </Link>
  );
};

export default MenuLink;
