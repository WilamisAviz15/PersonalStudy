import React, { useState, useRef } from "react";
import DialogError from "../Dialog/DialogError";
import "./FormUsers.css";

const FormUsers = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    const newUser = {
      id: Math.random().toString(),
      name: enteredName,
      age: +enteredUserAge,
    };
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }
    props.onSaveUser(newUser);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <DialogError
          title={error.title}
          message={error.message}
          onCloseDialog={errorHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className="container">
          <div className="container-elements">
            <label>Username</label>
            <input type="text" ref={nameInputRef} />
            <label>Age (Years)</label>
            <input type="number" ref={ageInputRef} />
            <button type="submit">Add user</button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default FormUsers;
