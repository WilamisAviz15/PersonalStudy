import React from "react";
import styles from "./InputText.module.scss";

type HTMLInputTypes = "text" | "password";

const InputText = ({
  placeholder,
  type,
  style,
}: {
  placeholder: string;
  type: HTMLInputTypes;
  style?: { padding: string };
}) => {
  return (
    <input type={type} style={{ padding: style?.padding }} className={styles.input} placeholder={placeholder}></input>
  );
};

export default InputText;
