import styles from "./DialogWallet.module.scss";

import checkedIcon from "../../../assets/img/checked-icon.svg";
import InputText from "../../Input/InputText";
import InputNumber from "../../Input/InputNumber";
import { useState } from "react";

const DialogWallet = () => {
  const [selectedColor, setSelectedColor] = useState<string>("color-1");
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  };

  const handleInputChecked = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <form onSubmit={(event) => handleOnSubmit(event)}>
      <div className={styles.content}>
        <label htmlFor="">Name:</label>
        <InputText />
        <label htmlFor="">Description:</label>
        <InputText />
        <label htmlFor="">Initial Value:</label>
        <InputNumber />
        <label htmlFor="">Color:</label>

        <div className={styles.content__custom__radios}>
          <div>
            <input
              type="radio"
              id={styles["color-1"]}
              name="color"
              value="color-1"
              checked={selectedColor === "color-1"}
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
              checked={selectedColor === "color-2"}
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
              checked={selectedColor === "color-3"}
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
              checked={selectedColor === "color-4"}
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
