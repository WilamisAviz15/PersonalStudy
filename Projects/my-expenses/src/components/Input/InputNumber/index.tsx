import styles from "./InputNumber.module.scss";

const InputNumber = () => {
  return <input type="number" min={0} className={styles.inputNumber} />;
};

export default InputNumber;
