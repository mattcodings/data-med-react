import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
const HomeLayout = () => {
  return (
    <>
      <nav>
        <span className="text-primary">DataMed</span>
        <Navbar />
      </nav>
      <Outlet />
    </>
  );
};
export default HomeLayout;
