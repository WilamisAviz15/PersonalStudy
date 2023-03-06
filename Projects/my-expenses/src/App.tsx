import { Route, Routes } from "react-router-dom";

import { AuthContextProvider } from "pages/auth/context/AuthProvider";
import Protected from "components/Protected";
import Auth from "pages/auth";
import Home from "pages/home";
import WalletContextProvider from "store/WalletProvider";
import Profile from "pages/profile";

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
        <Route
          path="/profile"
          element={
            <Protected>
              <WalletContextProvider>
                <Profile />
              </WalletContextProvider>
            </Protected>
          }
        ></Route>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
