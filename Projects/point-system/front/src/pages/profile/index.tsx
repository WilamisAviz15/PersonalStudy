import React from "react";

import Container from "../../shared/components/Container";
import Card from "../../components/Card";
import InputLabel from "../../components/InputLabel";
import style from "./Profile.module.scss";
import Button from "../../components/Button";
import AccessProfile from "../../components/AccessProfile";

const Profile = () => {
  return (
    <Container nameIcon="MdDashboard" titleComponent="Perfil">
      <Card type="customCard">
        <form className={style.form}>
          <InputLabel
            label="Matrícula:"
            input={{
              type: "text",
              placeholder: "Matrícula",
              styles: { padding: "5px", borderRadius: "4px", fontSize: "1rem", width: "100%" },
            }}
          />
          <InputLabel
            label="Nome completo:"
            input={{
              type: "text",
              placeholder: "Seu nome",
              styles: { padding: "5px", borderRadius: "4px", fontSize: "1rem", width: "100%" },
            }}
          />
          <InputLabel
            label="CPF:"
            input={{
              type: "text",
              placeholder: "XXX.XXX.XXX-XX",
              styles: { padding: "5px", borderRadius: "4px", fontSize: "1rem", width: "100%" },
            }}
          />
          <InputLabel
            label="Posição:"
            input={{
              type: "text",
              placeholder: "Sua posição",
              styles: { padding: "5px", borderRadius: "4px", fontSize: "1rem", width: "100%" },
            }}
          />
          <InputLabel
            label="Senha:"
            input={{
              type: "password",
              placeholder: "***********",
              styles: { padding: "5px", borderRadius: "4px", fontSize: "1rem", width: "100%" },
            }}
          />
          <InputLabel
            label="Confirmar senha:"
            input={{
              type: "password",
              placeholder: "***********",
              styles: { padding: "5px", borderRadius: "4px", fontSize: "1rem", width: "100%" },
            }}
          />
          <div className={style["form__access-profile"]}>
            <span>Perfis de acesso:</span>
            <div>
              <AccessProfile values={["Colaborador", "teste"]} />
            </div>
          </div>
          <div>
            <Button
              name="Cancelar"
              styles={{
                padding: "8px 10px",
                borderRadius: "4px",
                fontSize: "1rem",
                backgroundColor: "#3d3d3d",
                border: "1px solid white",
              }}
            />
            <Button name="Salvar" styles={{ padding: "8px 10px", borderRadius: "4px", fontSize: "1rem" }} />
          </div>
        </form>
      </Card>
    </Container>
  );
};

export default Profile;
