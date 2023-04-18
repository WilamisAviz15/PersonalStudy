import React from "react";
import styles from "./Button.module.scss";

const Button = ({ name }: { name: string }) => {
  return <button className={styles.btn}>{name}</button>;
};

export default Button;
