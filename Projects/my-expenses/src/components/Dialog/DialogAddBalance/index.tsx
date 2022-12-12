import InputNumber from "../../Input/InputNumber";
import styles from "./DialogAddBalance.module.scss";

const DialogAddBalance = ({
  addBalance,
  setAddBalance,
}: {
  addBalance: string | undefined;
  setAddBalance: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  const handleInputValue = (value: string) => {
    setAddBalance(value);
  };

  return (
    <section>
      <div className={styles.content}>
        <label htmlFor="">Value:</label>
        <InputNumber
          value={addBalance!}
          setValue={(value: string) => handleInputValue(value)}
        />
      </div>
    </section>
  );
};

export default DialogAddBalance;
