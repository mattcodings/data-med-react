import { useEffect, useState } from "react";
import { useProductContext } from "../pages/Products";
import ProductSingleItem from "./ProductSingleItem";
import FilterInput from "./FilterInput";

const ProductList = () => {
  const { productsArray, setFilterProductsObject, filterProductsObject } =
    useProductContext();
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    if (searchInput.trim() === "") {
      setFilterProductsObject(productsArray);
    } else {
      const searchFilter = searchInput.toLowerCase();
      const filteredProducts = productsArray.filter((item) => {
        return (
          item.name.toLowerCase().includes(searchFilter) ||
          item.company.toLowerCase().includes(searchFilter) ||
          item.category.toLowerCase().includes(searchFilter)
        );
      });
      setFilterProductsObject(filteredProducts);
    }
  }, [searchInput, productsArray, setFilterProductsObject]);
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    console.log(searchInput);
  };

  return (
    <div>
      <div className="flex justify-center items-center gap-x-2 my-20">
        <label htmlFor="search">Search</label>
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchChange}
          placeholder="Search"
          id="search"
          className="border-primary border-2 p-2 w-3/4 md:w-1/2 lg:w-1/4"
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
