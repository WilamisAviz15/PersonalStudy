import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/auth" element={<Auth />}></Route>
    </Routes>
  );
}

export default App;
