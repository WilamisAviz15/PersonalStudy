import styles from "./Dialog.module.scss";
import ReactDOM from "react-dom";
import DialogOverlay from "./DialogOverlay/DialogOverlay";
import { IPropsDialog } from "../../shared/interfaces/IPropsDialog.interface";

const Dialog = ({ title, onCloseDialog, children }: IPropsDialog) => {
  return ReactDOM.createPortal(
    <DialogOverlay title={title} onCloseDialog={onCloseDialog}>
      {children}
    </DialogOverlay>,
    document.getElementById("overlay-root")!
  );
};

export default Dialog;
