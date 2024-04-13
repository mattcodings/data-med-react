import { useState } from "react";
import { useCheckout } from "../../pages/Checkout";
import ShoppingCart from "../ShoppingCart";
import CheckoutInformationInput from "../CheckoutContainer/CheckoutInformationInput";
import { FaRegQuestionCircle } from "react-icons/fa";

const CheckoutPaymentFormTabTwo = () => {
  const { checkoutData, updateCheckoutData } = useCheckout();
  const [showCard, setShowCard] = useState(false);
  const handleChange = (e) => {
    updateCheckoutData(e.target.name, e.target.value);
  };
  return (
    <div className="mx-auto border-2 rounded-2xl border-primary p-20">
      <ShoppingCart />
      <p>*Fields are required</p>
      <CheckoutInformationInput
        name="nameOnCard"
        value={checkoutData.nameOnCard}
        onChange={handleChange}
        placeholder="Name On Card"
        type="text"
      />
      <div className="flex justify-between">
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
    </div>
  );
};
export default CheckoutPaymentFormTabTwo;
