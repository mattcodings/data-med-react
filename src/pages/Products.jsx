import { createContext, useContext, useEffect, useState } from "react";
import ProductFilterSection from "../components/ProductFilterSection";
import ProductList from "../components/ProductList";
import axios from "axios";
import { products } from "../productitems";

// const url = "https://course-api.com/react-store-products";

const ProductContext = createContext();
export const useProductContext = () => useContext(ProductContext);

const Products = () => {
  const [productsArray, setProductsArray] = useState(products);
  const [filterProductsObject, setFilterProductsObject] = useState({});

  // const fetchProducts = async () => {
  //   try {
  //     const response = await axios(url);
  //     const data = response.data;
  //     setProductsArray(data);
  //   } catch (error) {}
  // };
  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  return (
    <ProductContext.Provider
      value={{
        productsArray,
        setProductsArray,
        filterProductsObject,
        setFilterProductsObject,
      }}
    >
      <div className="flex">
        <ProductFilterSection />
        <ProductList />
      </div>
    </ProductContext.Provider>
  );
};
export default Products;
