import { useEffect } from "react";
import GoogleButton from "react-google-button";
import styles from "./Auth.module.scss";
import { UserAuth } from "./context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { IUserData } from "../../shared/interfaces/IUserData.interface";

const Auth = () => {
  const { googleSignIn, logOut, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user != null) {
      if (localStorage.getItem("user") === null) {
        const userData: IUserData = {
          id: user.uid,
          name: user.displayName!,
          email: user.email!,
          photoURL: user.photoURL!,
        };
        localStorage.setItem("user", JSON.stringify(userData));
      }

      navigate("/home");
    }
  }, [user]);

  return (
    <div className={styles.container}>
      <GoogleButton onClick={handleGoogleSignIn} />
      {user && <button onClick={logOut}>Logout</button>}
    </div>
  );
};

export default Auth;
