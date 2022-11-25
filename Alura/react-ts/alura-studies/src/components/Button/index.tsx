import React from "react";
import style from "./Button.module.scss";

interface PropsButton {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const Button = ({ text, type = "button", onClick }: PropsButton) => {
  return (
    <button type={type} className={style.botao} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
