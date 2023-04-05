import { useEffect } from "react";
import GoogleButton from "react-google-button";
import styles from "./Auth.module.scss";
import { UserAuth } from "./context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { IUserData } from "shared/interfaces/IUserData.interface";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "shared/util/firebase.config";
import { GoogleLogin } from "@react-oauth/google";

const Auth = () => {
  const { googleSignIn, logOut, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      onAuthStateChanged(auth, (currentUser) => {
        const userData: IUserData = {
          id: currentUser!.uid,
          name: currentUser!.displayName!,
          email: currentUser!.email!,
          photoURL: currentUser!.photoURL!,
        };
        localStorage.setItem("user", JSON.stringify(userData));
      });
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
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      ;
    </div>
  );
};

export default Auth;
