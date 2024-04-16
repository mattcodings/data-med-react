import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
const HomeLayout = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Outlet />
    </>
  );
};
export default HomeLayout;
