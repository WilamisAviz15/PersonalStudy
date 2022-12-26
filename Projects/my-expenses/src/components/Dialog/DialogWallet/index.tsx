import styles from "./DialogWallet.module.scss";

import checkedIcon from "assets/img/checked-icon.svg";
import InputText from "components/Input/InputText";
import InputNumber from "components/Input/InputNumber";
import { IWalletItem } from "shared/interfaces/IWalletItem.interface";

const DialogWallet = ({
  walletData,
  setWalletData,
}: {
  walletData: IWalletItem;
  setWalletData: React.Dispatch<React.SetStateAction<IWalletItem>>;
}) => {
  const handleInputChecked = (color: string) => {
    setWalletData((walletData) => ({
      id: walletData.id ? walletData.id : "",
      title: walletData.title,
      description: walletData.description,
      color: color,
      balance: walletData.balance,
      transactions: walletData.transactions,
    }));
  };

  const handleInputName = (value: string) => {
    setWalletData((walletData) => ({
      id: walletData.id ? walletData.id : "",
      title: value,
      description: walletData.description,
      color: walletData.color,
      balance: walletData.balance,
      transactions: walletData.transactions,
    }));
  };

  const handleInputDescription = (value: string) => {
    setWalletData((walletData) => ({
      id: walletData.id ? walletData.id : "",
      title: walletData.title,
      description: value,
      color: walletData.color,
      balance: walletData.balance,
      transactions: walletData.transactions,
    }));
  };

  const handleInputValue = (value: string) => {
    setWalletData((walletData) => ({
      id: walletData.id ? walletData.id : "",
      title: walletData.title,
      description: walletData.description,
      color: walletData.color,
      balance: value,
      transactions: walletData.transactions,
    }));
  };

  return (
    <section>
      <div className={styles.content}>
        {walletData.id && (
          <>
            <label htmlFor="">ID:</label>
            <InputText value={walletData.id} readonly={true} />
          </>
        )}
        <label htmlFor="">Name:</label>
        <InputText
          value={walletData.title}
          setValue={(value: string) => handleInputName(value)}
        />
        <label htmlFor="">Description:</label>
        <InputText
          value={walletData.description}
          setValue={(value: string) => handleInputDescription(value)}
        />
        {!walletData.id && (
          <>
            <label htmlFor="">Initial Value:</label>
            <InputNumber
              value={walletData.balance}
              setValue={(value: string) => handleInputValue(value)}
            />
          </>
        )}
        <label htmlFor="">Color:</label>

        <div className={styles.content__custom__radios}>
          <div>
            <input
              type="radio"
              id={styles["color-1"]}
              name="color"
              value="color-1"
              checked={walletData.color === "color-1"}
            />
            <label htmlFor="color-1">
              <span onClick={() => handleInputChecked("color-1")}>
                <img src={checkedIcon} alt="Checked Icon" />
              </span>
            </label>
          </div>

          <div>
            <input
              type="radio"
              id={styles["color-2"]}
              name="color"
              value="color-2"
              checked={walletData.color === "color-2"}
            />
            <label htmlFor="color-2">
              <span onClick={() => handleInputChecked("color-2")}>
                <img src={checkedIcon} alt="Checked Icon" />
              </span>
            </label>
          </div>

          <div>
            <input
              type="radio"
              id={styles["color-3"]}
              name="color"
              value="color-3"
              checked={walletData.color === "color-3"}
            />
            <label htmlFor="color-3">
              <span onClick={() => handleInputChecked("color-3")}>
                <img src={checkedIcon} alt="Checked Icon" />
              </span>
            </label>
          </div>

          <div>
            <input
              type="radio"
              id={styles["color-4"]}
              name="color"
              value="color-4"
              checked={walletData.color === "color-4"}
            />
            <label htmlFor="color-4">
              <span onClick={() => handleInputChecked("color-4")}>
                <img src={checkedIcon} alt="Checked Icon" />
              </span>
            </label>
          </div>
          <div>
            <input
              type="radio"
              id={styles["color-5"]}
              name="color"
              value="color-5"
              checked={walletData.color === "color-5"}
            />
            <label htmlFor="color-5">
              <span onClick={() => handleInputChecked("color-5")}>
                <img src={checkedIcon} alt="Checked Icon" />
              </span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DialogWallet;
