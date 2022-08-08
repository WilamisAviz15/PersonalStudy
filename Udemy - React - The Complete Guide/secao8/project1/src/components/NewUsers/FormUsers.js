import React, { useState } from "react";
import DialogError from "../Dialog/DialogError";
import "./FormUsers.css";

const FormUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const usernameInputHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const [error, setError] = useState();
  const ageInputHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const newUser = {
      id: Math.random().toString(),
      name: enteredUsername,
      age: +enteredAge,
    };
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }
    props.onSaveUser(newUser);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
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
            <input
              type="text"
              value={enteredUsername}
              onChange={usernameInputHandler}
            />
            <label>Age (Years)</label>
            <input
              type="number"
              value={enteredAge}
              onChange={ageInputHandler}
            />
            <button type="submit">Add user</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormUsers;
