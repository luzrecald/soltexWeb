import { Routes, Route, Navigate } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout/SiteLayout";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Customization from "./pages/Customization";
import GalleryPage from "./pages/GalleryPage";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/personalizacion" element={<Customization />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}