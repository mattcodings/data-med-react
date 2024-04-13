import CheckoutInformationInput from "./CheckoutInformationInput";
import ShoppingCart from "../ShoppingCart";
import { useCheckout } from "../../pages/Checkout";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Tab1 = () => {
  const { checkoutData, updateCheckoutData } = useCheckout();
  const navigate = useNavigate();

  const handleChange = (e) => {
    updateCheckoutData(e.target.name, e.target.value);
  };
  const handleForm = () => {
    navigate("/checkout/tab2");
  };

  return (
    <div className="mx-auto border-2 rounded-b-2xl border-primary p-20 pb-8">
      <ShoppingCart />
      <p>*Fields are required</p>
      <form onSubmit={handleForm}>
        <div className="flex">
          <CheckoutInformationInput
            name="firstName"
            value={checkoutData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            type="text"
          />
          <CheckoutInformationInput
            name="lastName"
            value={checkoutData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            type="text"
          />
        </div>
        <div className="flex">
          <CheckoutInformationInput
            name="email"
            value={checkoutData.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
          />
        </div>

        <CheckoutInformationInput
          name="billingAddress"
          value={checkoutData.billingAddress}
          onChange={handleChange}
          placeholder="Billing Address"
          type="text"
        />
        <div className="flex">
          <CheckoutInformationInput
            name="city"
            value={checkoutData.city}
            onChange={handleChange}
            placeholder="City"
            type="text"
          />
          <CheckoutInformationInput
            name="state"
            value={checkoutData.state}
            onChange={handleChange}
            placeholder="State"
            type="text"
          />
          <CheckoutInformationInput
            name="zipCode"
            value={checkoutData.zipCode}
            onChange={handleChange}
            placeholder="Zip Code"
            type="number"
          />
        </div>
        <CheckoutInformationInput
          name="tax"
          value={checkoutData.tax}
          onChange={handleChange}
          placeholder="Tax"
          type="number"
        />
        <div className="text-center mt-8">
          <button className="btn bg-primary text-accent">
            Continue to Payment Info
          </button>
        </div>
      </form>
    </div>
  );
};
export default Tab1;