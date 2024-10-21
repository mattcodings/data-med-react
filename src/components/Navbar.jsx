import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { user, loginWithRedirect, logout } = useAuth0();
  const { shoppingCart } = useGlobalContext();
  const [cartLengthIndicator, setCartLengthIndicator] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (cartLengthIndicator !== shoppingCart.length) {
    setCartLengthIndicator(shoppingCart.length);
    console.log(cartLengthIndicator);
  }

  return (
    <nav className="bg-accent">
      <div className="navbar align-element">
        <div className="navbar-start">
          <Link to="/">
            <img src="images/DataMed-logo.png" alt="DataMed Logo" />
          </Link>
        </div>

        <div className="navbar-center lg:flex">
          <ul className={`menu menu-horizontal p-0 hidden lg:flex`}>
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal hidden lg:flex">
            <div className="dropdown">
              <FaShoppingCart
                tabIndex={0}
                role="button"
                className="text-3xl text-primary mx-5"
              />
              <span
                className={
                  cartLengthIndicator > 0
                    ? "flex w-8 h-8 bg-primary text-white absolute left-12 bottom-8 rounded-box justify-center items-center"
                    : "hidden"
                }
              >
                {cartLengthIndicator}
              </span>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40"
              >
                {/* display cart in nav bar */}
                {shoppingCart.map((product) => {
                  return (
                    <li key={product.uid}>
                      <h3>{product.name}</h3>
                      <h6 className="mt-[-15px] border-b-2">{product.price}</h6>
                    </li>
                  );
                })}
                {shoppingCart.length > 0 ? (
                  <Link
                    to="/checkout"
                    className="hover:bg-primary hover:text-white hover:p-2 hover:rounded-box p-2"
                  >
                    Checkout
                  </Link>
                ) : (
                  "No Items Yet"
                )}
              </ul>
            </div>
            {user ? (
              <button
                type="button"
                className="text-center"
                // auth0 function to return home on logout
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                <FaUser className="text-3xl text-primary mx-5" />

                <span>Logout</span>
              </button>
            ) : (
              <button
                type="button"
                className="text-center"
                onClick={loginWithRedirect}
              >
                <FaUser className="text-3xl text-primary mx-5" />
                <span>Login</span>
              </button>
            )}
          </ul>
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars className="text-3xl" />
            <ul
              className={`menu menu-horizontal p-0 ${
                isMenuOpen
                  ? "block absolute right-10 bg-white border-8 w-32"
                  : "hidden"
              } lg:flex`}
            >
              <NavLinks />
              <Link to="/checkout">
                <FaShoppingCart
                  tabIndex={0}
                  role="button"
                  className="text-3xl text-primary my-5 mx-auto"
                />
              </Link>
              <span
                className={
                  cartLengthIndicator > 0
                    ? "flex w-8 h-8 bg-primary text-white absolute left-12 bottom-8 rounded-box justify-center items-center"
                    : "hidden"
                }
              >
                {cartLengthIndicator}
              </span>
              {user ? (
                <button
                  type="button"
                  className="text-center"
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  <FaUser className="text-3xl text-primary mx-5" />

                  <span>Logout</span>
                </button>
              ) : (
                <button
                  type="button"
                  className="text-center"
                  onClick={loginWithRedirect}
                >
                  <FaUser className="text-3xl text-primary mx-5" />
                  <span>Login</span>
                </button>
              )}
            </ul>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
