import React from "react";

import style from "./TBodyRow.module.scss";

const TBodyRow = ({ value }: { value: string | number }) => {
  return <span className={style.item}>{value}</span>;
};

export default TBodyRow;
