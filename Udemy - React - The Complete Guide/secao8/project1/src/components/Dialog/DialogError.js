import React from "react";
import "./DialogError.css";

const DialogError = (props) => {
  return (
    <div className="container-backdrop" onClick={props.onCloseDialog}>
      <div className="container-dialog">
        <header>{props.title}</header>
        <div className="container-dialog-content">
          <p>{props.message}</p>
        </div>
        <footer className="container-dialog-footer">
          <button onClick={props.onCloseDialog}>Okay</button>
        </footer>
      </div>
    </div>
  );
};

export default DialogError;
