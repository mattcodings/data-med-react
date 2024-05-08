import { useGlobalContext } from "../context";
import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCart = () => {
  const { shoppingCart, deleteItemFromCart } = useGlobalContext();

  return (
    <ul>
      {shoppingCart.map((item) => {
        return (
          <ShoppingCartItem
            key={item.uid}
            item={item}
            deleteItem={() => deleteItemFromCart(item.uid)}
          />
        );
      })}
    </ul>
  );
};
export default ShoppingCart;
