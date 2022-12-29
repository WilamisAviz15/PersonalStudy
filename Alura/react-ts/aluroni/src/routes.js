import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "pages/Home";
import Menu from "pages/Menu";
import Header from "components/Header";
import DefaultPage from "components/DefaultPage";
import About from "pages/About";

export default function AppRouter() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="cardapio" element={<Menu />} />
            <Route path="sobre" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}
