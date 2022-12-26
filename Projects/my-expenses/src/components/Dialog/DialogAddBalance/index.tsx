import InputNumber from "components/Input/InputNumber";
import styles from "./DialogAddBalance.module.scss";

const DialogAddBalance = ({
  addBalance,
  setAddBalance,
}: {
  addBalance: string | undefined;
  setAddBalance: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  return (
    <section>
      <div className={styles.content}>
        <label htmlFor="">Value:</label>
        <InputNumber
          value={addBalance!}
          setValue={(value: string) => setAddBalance(value)}
        />
      </div>
    </section>
  );
};

export default DialogAddBalance;
