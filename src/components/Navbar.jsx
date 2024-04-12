import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { user, loginWithRedirect, logout } = useAuth0();
  const { shoppingCart } = useGlobalContext();
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => {
    setShowCart(!showCart);
  };
  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <Link to="/">
            <img src="../assets/images/datamedlogo.jpg" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal">
            {user ? <Link to="/profile">Profile</Link> : ""}
            <div className="dropdown">
              <FaShoppingCart
                tabIndex={0}
                role="button"
                className="text-3xl text-primary mx-5"
              />
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                {shoppingCart.map((product) => {
                  return (
                    <li key={product.name}>
                      <h3>{product.name}</h3>
                    </li>
                  );
                })}
                {shoppingCart.length > 0 ? (
                  <Link to="/checkout">Checkout</Link>
                ) : (
                  "No Items Yet"
                )}
              </ul>
              {/* <div className={showCart ? "block" : "hidden"}>Cart Items</div> */}
            </div>
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
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
