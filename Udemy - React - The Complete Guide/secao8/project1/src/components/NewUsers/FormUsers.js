import React, { useState } from "react";
import "./FormUsers.css";

const FormUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const usernameInputHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
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
    props.onSaveUser(newUser);
    setEnteredUsername("");
    setEnteredAge("");
  };
  return (
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
          <input type="number" value={enteredAge} onChange={ageInputHandler} />
          <button type="submit">Add user</button>
        </div>
      </div>
    </form>
  );
};

export default FormUsers;
