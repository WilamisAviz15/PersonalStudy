import React from "react";
import Card from "./Card";

function Done(props) {
  return props.done ? "✅" : "❌";
}

function List(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          <Card className={item.done ? "done item" : "item"}>
            {item.text}
            <div>
              <button
                onClick={() => {
                  props.onDone(item);
                }}
              >
                <Done done={item.done}></Done>
              </button>
              <button
                onClick={() => {
                  props.onItemDeleted(item);
                }}
              >
                del
              </button>
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export default List;
