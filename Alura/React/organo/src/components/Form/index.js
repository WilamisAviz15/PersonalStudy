import React, { useState } from "react";
import "./styles.css";
import TextField from "../TextField";
import Dropdown from "../Dropdown";
import Button from "../Button";

const Form = (props) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    props.registerCollaborator({
      name,
      role,
      image,
      team,
    });
    setName("");
    setImage("");
    setRole("");
    setTeam("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextField
          label="Nome"
          value={name}
          setValue={(value) => setName(value)}
          placeholder="Digite seu nome"
        />
        <TextField
          label="Cargo"
          value={role}
          setValue={(value) => setRole(value)}
          placeholder="Digite seu cargo"
        />
        <TextField
          label="Imagem"
          value={image}
          setValue={(value) => setImage(value)}
          placeholder="Digite o endereço da imagem"
        />
        <Dropdown
          label="Time"
          value={team}
          setValue={(value) => setTeam(value)}
          items={props.teams}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
