import React from "react";

import style from "./TBodyRow.module.scss";

const TBodyRow = ({ value }: { value: string | number }) => {
  return <td className={style.item}>{value}</td>;
};

export default TBodyRow;
