import { useNavigate } from "react-router-dom";
import ShoppingCart from "../ShoppingCart";
import { useCheckout } from "../../pages/Checkout";
import { useGlobalContext } from "../../context";
import { useState } from "react";

const Tab3 = () => {
  const { checkoutData } = useCheckout();

  const { shoppingCart, clearShoppingCart } = useGlobalContext();
  const handleSubmit = () => {
    clearShoppingCart();

    alert("Order Received! Thank You!");
    navigate("/");
  };
  let total = 0;
  shoppingCart.forEach((product) => {
    total += product.price;
  });
  const {
    firstName,
    lastName,
    email,
    billingAddress,
    city,
    state,
    zipCode,
    nameOnCard,
    ccNumber,
    expDate,
    cvv,
  } = checkoutData;
  const navigate = useNavigate();
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto border-2 rounded-b-2xl border-primary p-10 pb-8"
    >
      {shoppingCart.length > 0 && <ShoppingCart />}
      <div>
        <h3 className="text-3xl">
          Name: {firstName} {lastName}
        </h3>
        <h5>Email: {email}</h5>
        <span>Billing Address: {billingAddress} </span> <span>{city} </span>
        <span>{state} </span>
        <span>{zipCode}</span>
        <h5>Name on Card: {nameOnCard}</h5>
        <span>Credit Card: {ccNumber} </span>
        <span>Exp Date: {expDate} </span>
        <span>CVV: {cvv}</span>
        {shoppingCart.length > 0 && (
          <p className="text-5xl text-center mb-8">
            Total: ${total.toFixed(2)}
          </p>
        )}
        <button
          type="submit"
          className="text-3xl p-8 items-center rounded-lg bg-primary block mx-auto text-accent"
        >
          Complete Checkout
        </button>
      </div>
      <div className="mt-8">
        <button
          onClick={() => navigate("/checkout/tab2")}
          className="btn bg-primary text-accent"
        >
          Go Back
        </button>
      </div>
    </form>
  );
};
export default Tab3;
