import { useGlobalContext } from "../context";
import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCart = () => {
  const { shoppingCart, deleteItemFromCart } = useGlobalContext();

  return (
    <ul>
      {shoppingCart.map((item) => {
        return (
          <ShoppingCartItem
            key={item.id}
            item={item}
            deleteItem={() => deleteItemFromCart(item.id)}
          />
        );
      })}
    </ul>
  );
};
export default ShoppingCart;
