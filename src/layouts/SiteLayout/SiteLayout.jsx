import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import MainNav from "../../components/MainNav/MainNav";
import Footer from "../../components/Footer/Footer";

export default function SiteLayout() {
  return (
    <>
      <Navbar />
      {/* ✅ ahora MainNav también se muestra en Home */}
      <MainNav />
      <Outlet />
      <Footer />
    </>
  );
}