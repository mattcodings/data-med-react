import { createContext, useContext, useEffect, useState } from "react";
import ProductFilterSection from "../components/ProductFilterSection";
import ProductList from "../components/ProductList";
import axios from "axios";
import { products } from "../productitems";

const ProductContext = createContext();
export const useProductContext = () => useContext(ProductContext);

const Products = () => {
  const [productsArray, setProductsArray] = useState(products);
  const [filterProductsObject, setFilterProductsObject] = useState({});

  return (
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
