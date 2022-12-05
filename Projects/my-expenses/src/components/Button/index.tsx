import styles from "./Button.module.scss";

import { FaPlus } from "react-icons/fa";

interface IPropsButton {
  OnClick: (value: boolean) => void;
}

const Button = ({ OnClick }: IPropsButton) => {
  return (
    <button className={styles.button} onClick={() => OnClick(true)}>
      <FaPlus className={styles.button__plusIcon} />
    </button>
  );
};

export default Button;
