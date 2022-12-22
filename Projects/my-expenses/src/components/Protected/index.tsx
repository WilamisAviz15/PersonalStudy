import { Navigate } from "react-router-dom";

const Protected = ({ children }: { children: JSX.Element }) => {
  if (localStorage.getItem("user") === null) {
    return <Navigate to="/auth" />;
  }
  return children;
};

export default Protected;
