import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../sharedPage/navbar/Navbar";
import Footer from "../sharedPage/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className=" min-h-[calc(100vh-136px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>

      <ScrollRestoration></ScrollRestoration>
    </>
  );
};

export default MainLayout;
