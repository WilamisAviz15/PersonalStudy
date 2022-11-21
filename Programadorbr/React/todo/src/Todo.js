import React, { useEffect, useState } from "react";
import ListItem from "./components/ListItem";
import TodoForm from "./components/TodoForm";
import Item from "./components/Item";

const Todo = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("saved_items"));
    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("saved_items", JSON.stringify(items));
    console.log("epa");
  }, [items]);

  const onAddItem = (text) => {
    let it = new Item(text);
    setItems([...items, it]);
  };

  const onItemDeleted = (item) => {
    let filteredItems = items.filter((it) => it.id !== item.id);
    setItems(filteredItems);
  };

  const onDone = (item) => {
    let updateditems = items.map((it) => {
      if (it.id === item.id) {
        it.done = !it.done;
      }
      return it;
    });
    setItems(updateditems);
  };

  return (
    <div className="container">
      <h1>Todo</h1>
      <TodoForm onAddItem={onAddItem} />
      <ListItem items={items} onDone={onDone} onItemDeleted={onItemDeleted} />
    </div>
  );
};

export default Todo;
