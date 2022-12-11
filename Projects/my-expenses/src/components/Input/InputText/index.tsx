import styles from "./InputText.module.scss";

interface Iprops {
  value: string;
  setValue?: (value: string) => void;
  readonly?: boolean;
}

const InputText = ({ value, setValue, readonly }: Iprops) => {
  return readonly ? (
    <input
      type="text"
      className={styles["inputTextId"]}
      value={value}
      readOnly={true}
    />
  ) : (
    <input
      type="text"
      className={styles.inputText}
      value={value}
      onChange={(event) => setValue!(event.target.value)}
    />
  );
};

export default InputText;
