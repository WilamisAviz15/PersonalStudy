import styles from "./InputNumber.module.scss";

interface Iprops {
  value: string;
  setValue: (value: string) => void;
}

const InputNumber = ({ value, setValue }: Iprops) => {
  return (
    <input
      type="number"
      className={styles.inputNumber}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

export default InputNumber;
