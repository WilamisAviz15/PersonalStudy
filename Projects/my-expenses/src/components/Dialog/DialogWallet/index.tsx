import styles from "./DialogWallet.module.scss";

import checkedIcon from "../../../assets/img/checked-icon.svg";
import InputText from "../../Input/InputText";
import InputNumber from "../../Input/InputNumber";
import { IWalletData } from "../../../shared/interfaces/IWalletData.interface";

const DialogWallet = ({
  walletData,
  setWalletData,
}: {
  walletData: IWalletData;
  setWalletData: React.Dispatch<React.SetStateAction<IWalletData>>;
}) => {
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleInputChecked = (color: string) => {
    setWalletData((walletData) => ({
      name: walletData.name,
      description: walletData.description,
      selectedColor: color,
      value: walletData.value,
    }));
  };

  const handleInputName = (value: string) => {
    setWalletData((walletData) => ({
      name: value,
      description: walletData.description,
      selectedColor: walletData.selectedColor,
      value: walletData.value,
    }));
  };

  const handleInputDescription = (value: string) => {
    setWalletData((walletData) => ({
      name: walletData.name,
      description: value,
      selectedColor: walletData.selectedColor,
      value: walletData.value,
    }));
  };

  const handleInputValue = (value: string) => {
    setWalletData((walletData) => ({
      name: walletData.name,
      description: walletData.description,
      selectedColor: walletData.selectedColor,
      value: value,
    }));
  };

  return (
    <form onSubmit={(event) => handleOnSubmit(event)}>
      <div className={styles.content}>
        <label htmlFor="">Name:</label>
        <InputText
          value={walletData.name}
          setValue={(value: string) => handleInputName(value)}
        />
        <label htmlFor="">Description:</label>
        <InputText
          value={walletData.description}
          setValue={(value: string) => handleInputDescription(value)}
        />
        <label htmlFor="">Initial Value:</label>
        <InputNumber
          value={walletData.value}
          setValue={(value: string) => handleInputValue(value)}
        />
        <label htmlFor="">Color:</label>

        <div className={styles.content__custom__radios}>
          <div>
            <input
              type="radio"
              id={styles["color-1"]}
              name="color"
              value="color-1"
              checked={walletData.selectedColor === "color-1"}
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
              checked={walletData.selectedColor === "color-2"}
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
              checked={walletData.selectedColor === "color-3"}
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
              checked={walletData.selectedColor === "color-4"}
            />
            <label htmlFor="color-4">
              <span onClick={() => handleInputChecked("color-4")}>
                <img src={checkedIcon} alt="Checked Icon" />
              </span>
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DialogWallet;
