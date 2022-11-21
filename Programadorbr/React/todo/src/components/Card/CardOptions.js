import React from "react";
import Done from "./CardDone";

const CardOptions = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.onDone(props.item);
        }}
      >
        <Done done={props.item.done}></Done>
      </button>
      <button
        onClick={() => {
          props.onItemDeleted(props.item);
        }}
      >
        del
      </button>
    </div>
  );
};

export default CardOptions;
