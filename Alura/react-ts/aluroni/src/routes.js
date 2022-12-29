import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "pages/Home";
import Menu from "pages/Menu";
import Header from "components/Header";
import DefaultPage from "components/DefaultPage";
import About from "pages/About";
import Footer from "components/Footer";
import NotFound from "pages/NotFound";

export default function AppRouter() {
  return (
    <main className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="cardapio" element={<Menu />} />
            <Route path="sobre" element={<About />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}
