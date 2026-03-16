import { Routes, Route, Navigate } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout/SiteLayout";

import ScrollToTop from "./ScrollToTop";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Customization from "./pages/Customization";
import GalleryPage from "./pages/GalleryPage";
import Contact from "./pages/Contact";
import ProductDetail from "./components/ProductDetail/ProductDetail";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<SiteLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/productos" element={<Products />} />
          <Route path="/productos/:id" element={<ProductDetail />} />

          <Route path="/personalizacion" element={<Customization />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/contacto" element={<Contact />} />

          <Route path="*" element={<Navigate to="/" replace />} />

        </Route>
      </Routes>
    </>
  );
}