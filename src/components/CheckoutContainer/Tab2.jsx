import { useState } from "react";
import { useCheckout } from "../../pages/Checkout";
import ShoppingCart from "../ShoppingCart";
import CheckoutInformationInput from "../CheckoutContainer/CheckoutInformationInput";
import { FaRegQuestionCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Tab2 = () => {
  const navigate = useNavigate();
  const { checkoutData, updateCheckoutData } = useCheckout();
  const [showCard, setShowCard] = useState(false);
  const handleChange = (e) => {
    updateCheckoutData(e.target.name, e.target.value);
  };
  const handleForm = () => {
    navigate("/checkout/tab3");
  };
  return (
    <div className="mx-auto border-2 rounded-b-2xl border-primary p-10 pb-8">
      <ShoppingCart />
      <p>*Fields are required</p>
      <form onSubmit={handleForm}>
        <CheckoutInformationInput
          name="nameOnCard"
          value={checkoutData.nameOnCard}
          onChange={handleChange}
          placeholder="Name On Card"
          type="text"
        />
        <div className="flex justify-between flex-wrap">
          <CheckoutInformationInput
            name="ccNumber"
            value={checkoutData.ccNumber}
            onChange={handleChange}
            placeholder="Credit Card Number"
            type="text"
          />
          <CheckoutInformationInput
            name="expDate"
            value={checkoutData.expDate}
            onChange={handleChange}
            placeholder="Expiration Date"
            type="text"
          />

          <div className="flex">
            <CheckoutInformationInput
              name="cvv"
              value={checkoutData.cvv}
              onChange={handleChange}
              placeholder="CVV"
              type="number"
            />
            <div className="flex relative items-center justify-center">
              <FaRegQuestionCircle
                onMouseEnter={() => setShowCard(true)}
                onMouseLeave={() => setShowCard(false)}
                className="text-3xl cursor-pointer"
              />
              {showCard && (
                <div className="absolute w-64 p-2 bg-white shadow-lg border bottom-full">
                  <img src="/cvv-cc.jpg" alt="credit card" />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="btn bg-primary text-accent">Review Order</button>
        </div>
        <div className="mt-8">
          <button
            onClick={() => navigate("/checkout/tab1")}
            className="btn bg-primary text-accent"
          >
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
};
export default Tab2;
