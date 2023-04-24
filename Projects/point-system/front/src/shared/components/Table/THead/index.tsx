import React from "react";

import style from "./THead.module.scss";
import THeadItem from "./THeadItem";

const THead = ({ tHeadData }: { tHeadData: string[] }) => {
  return (
    <>
      <thead className={style.thead}>
        <tr>
          {tHeadData.map((item) => {
            return <THeadItem key={item} item={item} />;
          })}
        </tr>
      </thead>
    </>
  );
};

export default THead;
