import styles from "./InputText.module.scss";

interface Iprops {
  value: string;
  setValue: (value: string) => void;
}

const InputText = ({ value, setValue }: Iprops) => {
  return (
    <input
      type="text"
      className={styles.inputText}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

export default InputText;
