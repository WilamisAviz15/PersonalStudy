import { Route, Routes } from "react-router-dom";
import Protected from "./components/Protected";
import Auth from "./pages/auth";
import { AuthContextProvider } from "./pages/auth/context/AuthProvider";
import Home from "./pages/home";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/auth" element={<Auth />}></Route>
        <Route
          path="/home"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        ></Route>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
