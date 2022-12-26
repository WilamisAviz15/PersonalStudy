import styles from "./InputText.module.scss";

interface Iprops {
  value: string;
  setValue?: (value: string) => void;
  readonly?: boolean;
  customStyles?: {
    backgroundColor: string;
  };
}

const InputText = ({ value, setValue, readonly, customStyles }: Iprops) => {
  return readonly ? (
    <input
      type="text"
      className={styles["inputTextId"]}
      style={{
        backgroundColor: customStyles ? customStyles.backgroundColor : "",
      }}
      value={value}
      readOnly={true}
    />
  ) : (
    <input
      type="text"
      className={styles.inputText}
      value={value}
      style={{
        backgroundColor: customStyles ? customStyles.backgroundColor : "",
      }}
      onChange={(event) => setValue!(event.target.value)}
    />
  );
};

export default InputText;
