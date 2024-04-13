import CheckoutInformationInput from "../CheckoutContainer/CheckoutInformationInput";
import ShoppingCart from "../ShoppingCart";
import { useCheckout } from "../../pages/Checkout";

const CheckoutInformationFormTabOne = () => {
  const { checkoutData, updateCheckoutData } = useCheckout();
  const handleChange = (e) => {
    updateCheckoutData(e.target.name, e.target.value);
  };
  console.log(checkoutData);
  return (
    <div className="mx-auto border-2 rounded-2xl border-primary p-20">
      <ShoppingCart />
      <p>*Fields are required</p>
      <div>
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
      </div>
    </div>
  );
};
export default CheckoutInformationFormTabOne;
{
  /*   <CheckoutInformationInput title="First Name" type="text" />
          <CheckoutInformationInput title="Last Name" type="text" />
        </div>
        <
        <CheckoutInformationInput title="Street Address" type="text" />
        <CheckoutInformationInput title="City" type="text" />
        <CheckoutInformationInput title="State" type="text" />
        <CheckoutInformationInput title="Zip Code" type="number" /> */
}
