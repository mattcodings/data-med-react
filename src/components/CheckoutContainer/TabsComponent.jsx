import { NavLink, Outlet } from "react-router-dom";
import { useCheckout } from "../../pages/Checkout";

import { FaCheck } from "react-icons/fa";

function TabsComponent() {
  const { checkoutData } = useCheckout() || {};
  const clientInfoInputsTrue = () => {
    const { firstName, lastName, email, billingAddress, city, state, zipCode } =
      checkoutData;
    return (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      billingAddress !== "" &&
      city !== "" &&
      state !== "" &&
      zipCode != ""
    );
  };
  const paymentInfoInputsTrue = () => {
    const { nameOnCard, ccNumber, expDate, cvv } = checkoutData;
    return nameOnCard !== "" && ccNumber !== "" && expDate !== "" && cvv;
  };
  return (
    <div className="w-[70%] mx-auto my-20">
      <nav>
        <ul className="flex justify-between">
          <li className="w-1/3 text-center border-2 rounded-t-lg border-primary">
            <NavLink
              to="tab1"
              activeClassName="active"
              className="w-[100%] bg-accent text-black flex justify-center items-center"
            >
              <span className="2xl">Client Information</span>{" "}
              {clientInfoInputsTrue() ? (
                <FaCheck className="icon-checkmark ml-8" />
              ) : (
                ""
              )}
            </NavLink>
          </li>
          <li className="w-1/3 text-center border-2 rounded-t-lg border-primary">
            <NavLink
              to="tab2"
              activeClassName="active"
              className="w-[100%] bg-accent text-black flex justify-center items-center"
            >
              <span className="2xl">Payment Information</span>{" "}
              {paymentInfoInputsTrue() ? (
                <FaCheck className="icon-checkmark ml-8" />
              ) : (
                ""
              )}
            </NavLink>
          </li>
          <li className="w-1/3 text-center border-2 rounded-t-lg border-primary">
            <NavLink
              to="tab3"
              activeClassName="active"
              className="w-[100%] bg-accent text-black flex justify-center items-center"
            >
              Review and Checkout
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet /> {/* This will render the child route that's active */}
    </div>
  );
}

export default TabsComponent;
