import React from "react";

import Card from "../../../components/Card";
import style from "./Table.module.scss";
import THead from "./THead";
import { TableInterface } from "./interfaces/table.interface";
import TBody from "./TBody";

const Table = ({ data }: { data: TableInterface }) => {
  return (
    <Card type="customCard" styles={{ paddingTop: "20px" }}>
      <div className={style.container}>
        <h3> {data.title}</h3>
        <table>
          <THead tHeadData={data.headers} />
          <TBody tBodyData={data.rows} />
        </table>
      </div>
    </Card>
  );
};

export default Table;
