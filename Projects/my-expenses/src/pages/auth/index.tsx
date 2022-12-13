import GoogleLogin from "react-google-login";
import styles from "./Auth.module.scss";

const responseGoogle = (response: any) => {
  //   const {
  //     profileObj: { name, email, imageUrl },
  //   } = response;
  console.log(response);
};

const Auth = () => {
  return (
    <div className={styles.container}>
      <GoogleLogin
        clientId={process.env.API_GOOGLE!}
        buttonText="Continuar com o Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
};

export default Auth;
