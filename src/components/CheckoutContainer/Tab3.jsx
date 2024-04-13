import { useNavigate } from "react-router-dom";
import ShoppingCart from "../ShoppingCart";
import { useCheckout } from "../../pages/Checkout";

const Tab3 = () => {
  const { checkoutData } = useCheckout();
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
    <div className="mx-auto border-2 rounded-b-2xl border-primary p-20 pb-8">
      <ShoppingCart />
      <div>
        <h3 className="text-3xl">
          {firstName} {lastName}
        </h3>
        <h5>{email}</h5>
        <span>{billingAddress} </span> <span>{city} </span>
        <span>{state} </span>
        <span>{zipCode}</span>
        <h5>{nameOnCard}</h5>
        <span>{ccNumber} </span>
        <span>{expDate} </span>
        <span>{cvv}</span>
      </div>
    </div>
  );
};
export default Tab3;
