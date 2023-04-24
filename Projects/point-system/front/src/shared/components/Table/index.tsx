import React from "react";

import Card from "../../../components/Card";
import style from "./Table.module.scss";
import THead from "./THead";

const Table = () => {
  return (
    <Card type="customCard" styles={{ paddingTop: "20px" }}>
      <div className={style.container}>
        <h3> Histórico de marcações feitas hoje</h3>
        <table>
          <THead tHeadData={["Colaborador", "Descrição", "Horário", "Alterador por", "Ação"]} />
        </table>
      </div>
    </Card>
  );
};

export default Table;
