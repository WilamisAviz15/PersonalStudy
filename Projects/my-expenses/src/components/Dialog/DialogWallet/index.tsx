import styles from "./DialogWallet.module.scss";

import checkedIcon from "../../../assets/img/checked-icon.svg";
import InputText from "../../Input/InputText";
import InputNumber from "../../Input/InputNumber";

const DialogWallet = () => {
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
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
        {/* <div>
          <label htmlFor="radio-1"></label>
          <input
            type="radio"
            className={styles.radio}
            id="radio-1"
            name="group"
          />

          <button className={styles.content__colors__dot}></button>
          <button className={styles.content__colors__dot}></button>
          <button className={styles.content__colors__dot}></button>
          <button className={styles.content__colors__dot}></button>
          <button className={styles.content__colors__dot}></button> 
        </div> */}

        <div className={styles.content__custom__radios}>
          <div>
            <input type="radio" id="color-1" name="color" value="color-1" />
            <label htmlFor="color-1">
              <span>
                <img src={checkedIcon} alt="Checked Icon" />
              </span>
            </label>
          </div>

          <div>
            <input type="radio" id="color-2" name="color" value="color-2" />
            <label htmlFor="color-2">
              <span>
                <img src={checkedIcon} alt="Checked Icon" />
              </span>
            </label>
          </div>

          <div>
            <input type="radio" id="color-3" name="color" value="color-3" />
            <label htmlFor="color-3">
              <span>
                <img src={checkedIcon} alt="Checked Icon" />
              </span>
            </label>
          </div>

          <div>
            <input type="radio" id="color-4" name="color" value="color-4" />
            <label htmlFor="color-4">
              <span>
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
