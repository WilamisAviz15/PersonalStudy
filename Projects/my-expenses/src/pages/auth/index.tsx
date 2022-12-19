import { useEffect } from "react";
import GoogleButton from "react-google-button";
import styles from "./Auth.module.scss";
import { UserAuth } from "./context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const { googleSignIn, logOut, user } = UserAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      console.log(process.env.REACT_APP_FIREBASE_API_KEY);
      await googleSignIn();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user != null) {
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
