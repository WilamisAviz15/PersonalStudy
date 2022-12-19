import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import { AuthContextProvider } from "./pages/auth/context/AuthProvider";
import Home from "./pages/home";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
