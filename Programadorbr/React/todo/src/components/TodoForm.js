import React, { useState } from "react";

const TodoForm = (props) => {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    let t = event.target.value;
    setText(t);
  };

  const addItem = (event) => {
    event.preventDefault();
    if (text) {
      props.onAddItem(text);
      setText("");
    }
  };
  return (
    <form>
      <input type="text" onChange={handleChange} value={text}></input>
      <button onClick={addItem}>Add</button>
    </form>
  );
};

export default TodoForm;
