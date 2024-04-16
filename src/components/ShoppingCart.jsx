import { useGlobalContext } from "../context";
import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCart = () => {
  const { shoppingCart } = useGlobalContext();
  return (
    <ul>
      {shoppingCart.map((item) => {
        return <ShoppingCartItem key={item.uid} item={item} />;
      })}
    </ul>
  );
};
export default ShoppingCart;
