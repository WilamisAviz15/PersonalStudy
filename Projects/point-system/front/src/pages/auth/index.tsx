import React from "react";

import InputText from "../../components/InputText";
import styles from "./Auth.module.scss";
import Button from "../../components/Button";

const Login = () => {
  return (
    <div className={styles.container}>
      <h1>Entre agora na sua conta</h1>
      <div className={styles.container__form}>
        <form>
          <InputText type="text" placeholder="Sua matrícula" />
          <InputText type="password" placeholder="Sua senha" />
          <a href="#">Esqueci minha senha</a>
          <Button name="Entrar" />
          <a href="#">Faça seu cadastro</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
