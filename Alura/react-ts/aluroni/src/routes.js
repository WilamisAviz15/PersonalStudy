import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "components/Header";
import DefaultPage from "components/DefaultPage";
import Footer from "components/Footer";
import Home from "pages/Home";
import Menu from "pages/Menu";
import About from "pages/About";
import NotFound from "pages/NotFound";
import Plate from "pages/Plate";

export default function AppRouter() {
  return (
    <main className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="cardapio" element={<Menu />} />
            <Route path="prato/:id" element={<Plate />} />
            <Route path="sobre" element={<About />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}
