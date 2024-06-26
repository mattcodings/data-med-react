import { createContext, useContext, useState } from "react";
import { nanoid } from "nanoid";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const updateShoppingCart = (item) => {
    setShoppingCart([...shoppingCart, { ...item, uid: nanoid() }]);
  };
  const clearShoppingCart = () => {
    setShoppingCart([]);
  };
  const deleteItemFromCart = (uid) => {
    setShoppingCart(shoppingCart.filter((item) => item.uid !== uid));
  };
  return (
    <GlobalContext.Provider
      value={{
        shoppingCart,
        updateShoppingCart,
        deleteItemFromCart,
        clearShoppingCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
