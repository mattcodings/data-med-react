import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const Footer = () => {
  return (
    <div className="bg-accent py-8">
      <div className="flex justify-between lg:w-[95%] mx-auto">
        <Link to="/">
          <img
            src="/images/DataMed-logo.png"
            alt="DataMed Logo"
            className="inline-block"
          />
        </Link>

        <ul className=" menu menu-horizontal p-0 flex footer-nav font-bold md:text-2xl">
          <NavLinks />
        </ul>
      </div>
    </div>
  );
};
export default Footer;
