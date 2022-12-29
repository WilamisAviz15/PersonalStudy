import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "pages/home";
import Menu from "pages/Menu";
import Header from "components/Header";
import DefaultPage from "components/DefaultPage";

export default function AppRouter() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="cardapio" element={<Menu />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}
