import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import Footer from "../components/Footer";
const HomeLayout = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};
export default HomeLayout;
