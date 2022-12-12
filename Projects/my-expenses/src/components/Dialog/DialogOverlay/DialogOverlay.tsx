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
  isValueAddBalance,
  onCloseDialog,
  saveNewWallet,
  updateBalanceOnWallet,
}: IPropsDialog) => {
  const [walletData, setWalletData] = useState<IWalletItem>({
    title: "",
    description: "",
    color: "color-1",
    id: "",
    transactions: [],
    balance: "",
  });
  const [addBalanceValue, setAddBalanceValue] = useState<string>();

  useEffect(() => {
    if (wallet !== undefined) {
      setWalletData(wallet);
      console.log(wallet);
    }
  }, []);

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (addBalanceValue === undefined) {
      saveNewWallet!(walletData);
    } else {
      updateBalanceOnWallet!(addBalanceValue, isValueAddBalance!);
    }
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
        {isValueAddBalance !== undefined ? (
          <DialogAddBalance
            addBalance={addBalanceValue}
            setAddBalance={setAddBalanceValue}
          />
        ) : (
          <DialogWallet walletData={walletData} setWalletData={setWalletData} />
        )}
      </main>
      <footer className={styles["container-dialog__footer"]}>
        <button onClick={() => onCloseDialog(false)}>Cancel</button>
        <button>Save</button>
      </footer>
    </form>
  );
};

export default DialogOverlay;
