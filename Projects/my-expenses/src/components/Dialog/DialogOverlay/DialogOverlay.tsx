import { MdClose } from "react-icons/md";
import { IPropsDialog } from "../../../shared/interfaces/IPropsDialog.interface";
import styles from "./DialogOverlay.module.scss";

const DialogOverlay = ({ title, onCloseDialog, children }: IPropsDialog) => {
  return (
    <div className={styles["container-dialog"]}>
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
      <div className={styles["container-dialog__content"]}>{children}</div>
      <footer className={styles["container-dialog__footer"]}>
        <button onClick={() => onCloseDialog(false)}>Cancel</button>
        <button>Create</button>
      </footer>
    </div>
  );
};

export default DialogOverlay;
