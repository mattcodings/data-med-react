import { createContext, useContext, useState } from "react";
// import CheckoutTabs from "../components/CheckoutTabs";
import TabsComponent from "../components/CheckoutContainer/TabsComponent";
const CheckoutContext = createContext();
export const useCheckout = () => useContext(CheckoutContext);
const Checkout = () => {
  const [checkoutData, setCheckoutData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    billingAddress: "",
    city: "",
    state: "",
    zipCode: "",
    tax: 0,
    shipping: "1 business day",
    nameOnCard: "",
    ccNumber: "",
    expDate: "",
    cvv: "",
  });
  const updateCheckoutData = (key, value) => {
    setCheckoutData((prevData) => ({ ...prevData, [key]: value }));
  };
  return (
    <CheckoutContext.Provider value={{ checkoutData, updateCheckoutData }}>
      <h2 className="text-6xl text-center my-10 bg-primary text-white p-8">
        Checkout
      </h2>
      <TabsComponent />
    </CheckoutContext.Provider>
  );
};

export default Checkout;
