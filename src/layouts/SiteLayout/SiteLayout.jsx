import { Outlet } from "react-router-dom";
import MainNav from "../../components/MainNav/MainNav";
import Footer from "../../components/Footer/Footer";

export default function SiteLayout() {
  return (
    <>
      <MainNav />
      <Outlet />
      <Footer />
    </>
  );
}