import React, { useContext } from "react";
import Card from "../../components/Card";

import style from "./Home.module.scss";
import Table from "../../shared/components/Table";
import Container from "../../shared/components/Container";
import { UserContext, UserType } from "../../contexts/User.context";

const Home: React.FC = () => {
  const { currentUser } = useContext(UserContext) as UserType;
  console.log(currentUser);

  return (
    <Container nameIcon="MdDashboard" titleComponent="Home">
      <div className={style.container__list__cards}>
        <Card
          type="double"
          params={{ title: "Registrar entrada", img: "MdLogin" }}
          styles={{ maxWidth: "150px", maxHeight: "150px", height: "150px", cursor: "pointer" }}
        />
        <Card
          type="double"
          params={{ title: "Registrar saída", img: "MdLogout" }}
          styles={{ maxWidth: "150px", maxHeight: "150px", height: "150px", cursor: "pointer" }}
        />
        <Card
          type="simple"
          params={{ title: "Horas trabalhadas", description: "18:34" }}
          styles={{ maxWidth: "150px", maxHeight: "150px", height: "150px", cursor: "pointer" }}
        />
        <Card
          type="simple"
          params={{ title: "Você tem", description: "0 pendências" }}
          styles={{ maxWidth: "150px", maxHeight: "150px", height: "150px", cursor: "pointer" }}
        />
      </div>
      <div className={style.container__cards__countdown}>
        <Card type="textCard" params={{ description: "00:00:00" }} styles={{ maxWidth: "none", width: "100%" }} />
      </div>
      <Table
        data={{
          title: "Histórico de marcações feitas hoje",
          headers: ["Colaborador", "Descrição", "Horário", "Alterador por", "Ações"],
          rows: [
            { Colaborador: "Wilamis A.", Descrição: "Entrada", Horario: "13:00:00", "Alterado Por": "Sistema" },
            { Colaborador: "Wilamis A.", Descrição: "Entrada", Horario: "13:00:00", "Alterado Por": "Sistema" },
            { Colaborador: "Wilamis A.", Descrição: "Entrada", Horario: "13:00:00", "Alterado Por": "Sistema" },
          ],
        }}
      />
    </Container>
  );
};

export default Home;
