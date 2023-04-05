import { Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { AuthContextProvider } from "pages/auth/context/AuthProvider";
import Protected from "components/Protected";
import Auth from "pages/auth";
import Home from "pages/home";
import WalletContextProvider from "store/WalletProvider";
import Profile from "pages/profile";
import { CLIENT_ID_GOOGLE } from "shared/util/util";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route
          path="/auth"
          element={
            <GoogleOAuthProvider clientId={CLIENT_ID_GOOGLE}>
              <Auth />
            </GoogleOAuthProvider>
          }
        ></Route>
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
