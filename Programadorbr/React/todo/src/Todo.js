import React, { useState } from "react";
import List from "./components/List";
import TodoForm from "./components/TodoForm";
import Item from "./components/Item";

function Todo() {
  const [items, setItems] = useState([]);

  function onAddItem(text) {
    let it = new Item(text);
    setItems([...items, it]);
  }

  function onItemDeleted(item) {
    let filteredItems = items.filter((it) => it.id != item.id);
    setItems(filteredItems);
  }

  function onDone(item) {
    let updateditems = items.map((it) => {
      if (it.id === item.id) {
        it.done = !it.done;
      }
      return it;
    });
    setItems(updateditems);
  }

  return (
    <div className="container">
      <h1>Todo</h1>
      <TodoForm onAddItem={onAddItem} />
      <List items={items} onDone={onDone} onItemDeleted={onItemDeleted} />
    </div>
  );
}

export default Todo;
