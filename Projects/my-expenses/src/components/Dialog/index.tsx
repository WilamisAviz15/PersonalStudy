import styles from "./Dialog.module.scss";
import ReactDOM from "react-dom";
import DialogOverlay from "./DialogOverlay/DialogOverlay";
import { IPropsDialog } from "../../shared/interfaces/IPropsDialog.interface";
import React from "react";
import DialogBackdrop from "./DialogBackdrop";

const Dialog = ({
  title,
  onCloseDialog,
  saveNewWallet,
  children,
}: IPropsDialog) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <DialogBackdrop onCloseDialog={onCloseDialog} />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <DialogOverlay
          title={title}
          onCloseDialog={onCloseDialog}
          saveNewWallet={saveNewWallet}
        />,
        document.getElementById("overlay-root")!
      )}
    </React.Fragment>
  );
};

export default Dialog;
