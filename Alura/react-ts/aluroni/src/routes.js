import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "pages/home";
import Menu from "pages/Menu";
import Header from "components/Header";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}
