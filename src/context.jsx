import { createContext, useContext, useState } from "react";
import { nanoid } from "nanoid";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const updateShoppingCart = (item) => {
    setShoppingCart([...shoppingCart, { ...item, uid: nanoid() }]);
  };
  const deleteItemFromCart = (id) => {
    setShoppingCart(shoppingCart.filter((item) => item.id !== id));
  };
  return (
    <GlobalContext.Provider
      value={{ shoppingCart, updateShoppingCart, deleteItemFromCart }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
