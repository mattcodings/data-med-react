import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "/products", text: "products" },
];
const NavLinks = () => {
  const { user, loginWithRedirect } = useAuth0();
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
      {/* send user to checkout page or redirect to login to checkout */}
      {user ? (
        <li>
          <NavLink to="/checkout">Checkout</NavLink>
        </li>
      ) : (
        <li>
          <button
            type="button"
            className="text-center"
            onClick={loginWithRedirect}
          >
            Checkout
          </button>
        </li>
      )}
    </>
  );
};
export default NavLinks;
