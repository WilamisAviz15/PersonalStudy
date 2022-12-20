import { Navigate } from "react-router-dom";
import { UserAuth } from "../../pages/auth/context/AuthProvider";

const Protected = ({ children }: { children: JSX.Element }) => {
  if (localStorage.getItem("user") === null) {
    return <Navigate to="/auth" />;
  }
  return children;
};

export default Protected;
