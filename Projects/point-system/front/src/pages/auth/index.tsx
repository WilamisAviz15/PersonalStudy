import React, { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../../components/Input";
import styles from "./Auth.module.scss";
import Button from "../../components/Button";
import authService from "./auth.service";
import { SignInInterface } from "./interfaces/signIn.interface";
import Snackbar from "../../shared/components/Snackbar";
import { ResponseAPIInterface } from "./interfaces/responseAPI.interface";

const Login = () => {
  const [formSignIn, setFormSignIn] = useState<SignInInterface>({ login: "", password: "" });
  const [ResponseAPI, setResponseAPI] = useState<ResponseAPIInterface>();
  const [showMessage, setShowMessage] = useState(false);
  const authLogin = async (event: React.FormEvent<HTMLFormElement>, data: SignInInterface) => {
    event.preventDefault();
    try {
      const res = await authService.authenticate(data);
      console.log(res);
    } catch (error) {
      console.log("catch");
      setResponseAPI({ isError: true, message: error.message, type: "danger" });
    }
    setShowMessage(true);
  };

  const handleInputChanges = (field: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormSignIn((prev) => ({ ...prev, [field]: e.target.value }));
    };
  };

  return (
    <section>
      <div className={styles.container}>
        <h1>Entre agora na sua conta</h1>
        <div className={styles.container__form}>
          <form onSubmit={(event) => authLogin(event, formSignIn)}>
            <Input
              type="text"
              placeholder="Sua matrícula"
              value={formSignIn?.login}
              onChange={handleInputChanges("login")}
            />
            <Input
              type="password"
              placeholder="Sua senha"
              value={formSignIn?.password}
              onChange={handleInputChanges("password")}
            />
            <a href="#">Esqueci minha senha</a>
            <Button
              name="Entrar"
              styles={{ borderRadius: "12px", padding: "16px 30px", border: "none", width: "100%", fontWeight: "700" }}
            />
            <Link to="/">Faça seu cadastro</Link>
          </form>
        </div>
      </div>
      {showMessage && (
        <Snackbar
          message={ResponseAPI!.message}
          type={ResponseAPI!.type}
          isActive={showMessage}
          setIsActive={setShowMessage}
        />
      )}
    </section>
  );
};

export default Login;
