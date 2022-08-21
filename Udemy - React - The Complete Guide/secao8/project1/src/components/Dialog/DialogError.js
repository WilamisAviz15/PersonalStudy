import React from "react";
import ReactDOM from "react-dom";
import "./DialogError.css";

const Backdrop = (props) => {
  return (
    <div className="container-backdrop" onClick={props.onCloseDialog}></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="container-dialog">
      <header>{props.title}</header>
      <div className="container-dialog-content">
        <p>{props.message}</p>
      </div>
      <footer className="container-dialog-footer">
        <button onClick={props.onCloseDialog}>Okay</button>
      </footer>
    </div>
  );
};

const DialogError = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseDialog={props.onCloseDialog} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onCloseDialog={props.onCloseDialog}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default DialogError;
