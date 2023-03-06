import ReactDOM from "react-dom";
import React from "react";

import DialogOverlay from "./DialogOverlay/DialogOverlay";
import DialogBackdrop from "./DialogBackdrop";
import { IPropsDialog } from "shared/interfaces/IPropsDialog.interface";

const Dialog = ({
  title,
  wallet,
  onCloseDialog,
  saveNewWallet,
  updateWallet,
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
          updateWallet={updateWallet}
          wallet={wallet}
        />,
        document.getElementById("overlay-root")!
      )}
    </React.Fragment>
  );
};

export default Dialog;
