import { useNavigate } from "react-router-dom";
import ShoppingCart from "../ShoppingCart";
import { useCheckout } from "../../pages/Checkout";
import { useGlobalContext } from "../../context";

const Tab3 = () => {
  const { checkoutData } = useCheckout();
  const { shoppingCart } = useGlobalContext();
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
        <span>{total.toFixed(2)}</span>
      </div>
      <div className="mt-8">
        <button
          onClick={() => navigate("/checkout/tab2")}
          className="btn bg-primary text-accent"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};
export default Tab3;
