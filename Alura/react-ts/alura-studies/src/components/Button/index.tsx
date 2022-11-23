import React from "react";
import style from "./Button.module.scss";

const Button = ({
  text,
  type = "button",
}: {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
}) => {
  return (
    <button type={type} className={style.botao}>
      {text}
    </button>
  );
};

export default Button;
