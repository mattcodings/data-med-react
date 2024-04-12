import { useState } from "react";
import { useProductContext } from "../pages/Products";

const ProductFilterList = () => {
  const { productsArray, filterProductsObject } = useProductContext();
  console.log(productsArray);
  const [filters, setFilters] = useState({
    category: [],
    company: [],
  });
  return <div></div>;
};
export default ProductFilterList;
