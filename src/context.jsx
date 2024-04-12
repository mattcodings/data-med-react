import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const updateShoppingCart = (item) => {
    setShoppingCart([...shoppingCart, item]);
  };
  return (
    <GlobalContext.Provider value={{ shoppingCart, updateShoppingCart }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
