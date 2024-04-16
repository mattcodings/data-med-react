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
      <div className="flex justify-center items-center gap-x-2 my-20">
        <label htmlFor="search ">Search</label>
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchChange}
          placeholder="search"
          id="search"
          className="border-primary border-2 p-2"
        />
      </div>
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
