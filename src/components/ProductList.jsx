import { useState } from "react";
import { useProductContext } from "../pages/Products";
import ProductSingleItem from "./ProductSingleItem";
import FilterInput from "./FilterInput";

const ProductList = () => {
  const { productsArray, filterProductsObject } = useProductContext();
  const [searchInput, setSearchInput] = useState("");
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    console.log(searchInput);
  };

  return (
    <div>
      <input
        type="text"
        value={searchInput}
        onChange={handleSearchChange}
        placeholder="search"
        className="border-primary border-4 block mx-auto"
      />
      <div className="mx-20">
        {filterProductsObject?.length > 0
          ? filterProductsObject.map((product) => {
              return <ProductSingleItem key={product.id} {...product} />;
            })
          : productsArray.map((product) => {
              return <ProductSingleItem key={product.id} {...product} />;
            })}
      </div>
    </div>
  );
};
export default ProductList;
