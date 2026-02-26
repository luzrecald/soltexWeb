import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import MainNav from "../../components/MainNav/MainNav";
import Footer from "../../components/Footer/Footer";

export default function SiteLayout() {
  const location = useLocation();

  // ✅ Home: NO mostrar MainNav porque ya está en el Hero
  const isHome = location.pathname === "/";

  return (
    <>
      <Navbar />

      {!isHome && <MainNav />}

      <Outlet />

      <Footer />
    </>
  );
}