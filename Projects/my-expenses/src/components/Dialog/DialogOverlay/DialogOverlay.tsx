import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { IPropsDialog } from "../../../shared/interfaces/IPropsDialog.interface";
import { IWalletItem } from "../../../shared/interfaces/IWalletItem.interface";
import DialogAddBalance from "../DialogAddBalance";
import DialogWallet from "../DialogWallet";
import styles from "./DialogOverlay.module.scss";

const DialogOverlay = ({
  title,
  wallet,
  onCloseDialog,
  updateWallet,
  saveNewWallet,
}: IPropsDialog) => {
  const [walletData, setWalletData] = useState<IWalletItem>({
    title: "",
    description: "",
    color: "color-1",
    id: "",
    transactions: [],
    balance: "0.00",
  });

  useEffect(() => {
    if (wallet !== undefined) {
      setWalletData(wallet);
      console.log(wallet);
    }
  }, []);

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    saveNewWallet!(walletData);
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
        {title === "Create a wallet" && (
          <DialogWallet walletData={walletData} setWalletData={setWalletData} />
        )}

        {title === "Add value" && (
          <DialogAddBalance
            walletData={walletData}
            updateWallet={updateWallet}
          />
        )}
      </main>
      <footer className={styles["container-dialog__footer"]}>
        <button onClick={() => onCloseDialog(false)}>Cancel</button>
        <button>Create</button>
      </footer>
    </form>
  );
};

export default DialogOverlay;
