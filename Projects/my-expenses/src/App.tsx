import { Route, Routes } from "react-router-dom";
import Protected from "./components/Protected";
import Auth from "./pages/auth";
import { AuthContextProvider } from "./pages/auth/context/AuthProvider";
import Home from "./pages/home";
import WalletContextProvider from "./store/WalletProvider";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/auth" element={<Auth />}></Route>
        <Route
          path="/home"
          element={
            <Protected>
              <WalletContextProvider>
                <Home />
              </WalletContextProvider>
            </Protected>
          }
        ></Route>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
