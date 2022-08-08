import React from "react";
import "./DialogError.css";

const DialogError = () => {
  return (
    <div className="container-dialog">
      <header>Invalid Input</header>
      <div className="container-dialog-content">
        <p>Please enter a valid name and age</p>
      </div>
      <footer className="container-dialog-footer">
        <button>Okay</button>
      </footer>
    </div>
  );
};

export default DialogError;
