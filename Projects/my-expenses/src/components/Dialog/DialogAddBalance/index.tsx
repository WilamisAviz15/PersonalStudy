import { IWalletItem } from "../../../shared/interfaces/IWalletItem.interface";
import InputNumber from "../../Input/InputNumber";
import styles from "./DialogAddBalance.module.scss";

const DialogAddBalance = ({
  walletData,
  updateWallet,
}: {
  walletData: IWalletItem;
  updateWallet: ((wallet: IWalletItem) => void) | undefined;
}) => {
  console.log(walletData);
  const handleInputValue = (value: string) => {
    // updateWallet!();
  };

  return (
    <section>
      <div className={styles.content}>
        <label htmlFor="">Name:</label>
        <InputNumber
          value={"1"}
          setValue={(value: string) => handleInputValue(value)}
        />
      </div>
    </section>
  );
};

export default DialogAddBalance;
