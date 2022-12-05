import styles from "./Button.module.scss";

import { FaPlus } from "react-icons/fa";

const Button = () => {
  return (
    <button className={styles.button}>
      <FaPlus className={styles.button__plusIcon} />
    </button>
  );
};

export default Button;
