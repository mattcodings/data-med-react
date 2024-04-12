import { useAuth0 } from "@auth0/auth0-react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "/products", text: "products" },
  { id: 3, url: "/login", text: "login" },
];
const NavLinks = () => {
  const { user } = useAuth0();
  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.id}>
            <NavLink className="capitalize" to={link.url}>
              {link.text}
            </NavLink>
          </li>
        );
      })}
      {user && (
        <li>
          <NavLink to="/checkout">Checkout</NavLink>
        </li>
      )}
    </>
  );
};
export default NavLinks;
