import { createContext, useContext, useState } from "react";
import ProductFilterSection from "../components/ProductFilterSection";
import ProductList from "../components/ProductList";
import { products } from "../productitems";

const ProductContext = createContext();
// create product context to use in other components
export const useProductContext = () => useContext(ProductContext);

const Products = () => {
  // products are the list of products from productitems.js - needed to add to cart
  const [productsArray, setProductsArray] = useState(products);
  // the products array filtered
  const [filterProductsObject, setFilterProductsObject] = useState({});

  return (
    // add all state variables to context to utilize throughout app
    <ProductContext.Provider
      value={{
        productsArray,
        setProductsArray,
        filterProductsObject,
        setFilterProductsObject,
      }}
    >
      <h1 className="text-6xl text-center my-10 bg-primary text-white p-8">
        Products
      </h1>
      <div className="flex flex-wrap lg:flex-nowrap">
        <ProductFilterSection />
        <ProductList />
      </div>
    </ProductContext.Provider>
  );
};
export default Products;
