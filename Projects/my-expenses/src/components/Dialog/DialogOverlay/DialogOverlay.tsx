import { useState } from "react";
import { MdClose } from "react-icons/md";
import { IPropsDialog } from "../../../shared/interfaces/IPropsDialog.interface";
import { IWalletData } from "../../../shared/interfaces/IWalletData.interface";
import DialogWallet from "../DialogWallet";
import styles from "./DialogOverlay.module.scss";

const DialogOverlay = ({
  title,
  onCloseDialog,
  saveNewWallet,
}: IPropsDialog) => {
  const [walletData, setWalletData] = useState<IWalletData>({
    name: "",
    description: "",
    selectedColor: "color-1",
    value: "0.00",
  });

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    saveNewWallet(walletData);
  };

  return (
    <form
      className={styles["container-dialog"]}
      onSubmit={(event) => handleOnSubmit(event)}
    >
      <header className={styles["container-dialog__header"]}>
        <span>{title}</span>
        <button
          className={styles["container-dialog__header__button"]}
          onClick={() => onCloseDialog(false)}
        >
          <MdClose
            className={styles["container-dialog__header__button__closeIcon"]}
          />
        </button>
      </header>
      <main className={styles["container-dialog__content"]}>
        <DialogWallet walletData={walletData} setWalletData={setWalletData} />
      </main>
      <footer className={styles["container-dialog__footer"]}>
        <button onClick={() => onCloseDialog(false)}>Cancel</button>
        <button>Create</button>
      </footer>
    </form>
  );
};

export default DialogOverlay;
