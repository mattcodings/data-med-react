import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { Footer } from "../components";
const HomeLayout = () => {
  return (
    <>
      {/* The outlet is the layout of each page */}
      <nav>
        <Navbar />
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};
export default HomeLayout;
