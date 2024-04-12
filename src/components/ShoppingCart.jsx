import { useGlobalContext } from "../context";
import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCart = () => {
  const { shoppingCart } = useGlobalContext();
  return (
    <ul>
      {shoppingCart.map((item) => {
        return (
          <li key={item.name}>
            <ShoppingCartItem item={item} />
          </li>
        );
      })}
    </ul>
  );
};
export default ShoppingCart;
