import React from "react";
import Card from "./Card/Card";
import CardOptions from "./Card/CardOptions";

const List = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          <Card className={item.done ? "done item" : "item"}>
            {item.text}
            <CardOptions
              item={item}
              onDone={props.onDone}
              onItemDeleted={props.onItemDeleted}
            />
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default List;
