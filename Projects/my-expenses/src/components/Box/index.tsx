import modules from "./Box.module.scss";

import React from "react";
import Card from "../Card";

const Box = () => {
  return (
    <Card>
      <article className={modules.box}>
        <h3>Transaction</h3>
      </article>
    </Card>
  );
};

export default Box;
