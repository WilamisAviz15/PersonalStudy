import React from "react";

import Input from "../../components/Input";
import styles from "./Auth.module.scss";
import Button from "../../components/Button";

const Login = () => {
  return (
    <div className={styles.container}>
      <h1>Entre agora na sua conta</h1>
      <div className={styles.container__form}>
        <form>
          <Input type="text" placeholder="Sua matrícula" />
          <Input type="password" placeholder="Sua senha" />
          <a href="#">Esqueci minha senha</a>
          <Button
            name="Entrar"
            styles={{ borderRadius: "12px", padding: "16px 30px", border: "none", width: "100%", fontWeight: "700" }}
          />
          <a href="#">Faça seu cadastro</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
