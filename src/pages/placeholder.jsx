/* import { useState } from "react";
import ProductSingleItem from "./ProductSingleItem";
import { products } from "../productitems";

const ProductList = () => {
  const categoryArray = [
    ...new Set(products.map((product) => product.category)),
  ];
  const companyArray = [...new Set(products.map((product) => product.company))];
  console.log(products);
  const [filters, setFilters] = useState({
    category: [],
    company: [],
  });
  const handleCheckboxChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: prevFilters[type].includes(value)
        ? prevFilters[type].filter((item) => item !== value)
        : [...prevFilters[type], value],
    }));
  };
  const filteredProducts = products.filter((product) => {
    return (
      (filters.category.length === 0 ||
        filters.category.includes(product.category)) &&
      (filters.company.length === 0 ||
        filters.company.includes(product.company))
    );
  });

  console.log(filteredProducts);
  return (
    <div className="flex">
      <div>
        <h3 className="text-3xl border-b-8 border-primary">Category</h3>
        <ul>
          {categoryArray.map((category) => {
            return (
              <li key={category}>
                <label>
                  {category}
                  <input
                    type="checkbox"
                    checked={filters.category.includes(category)}
                    onChange={() => handleCheckboxChange("category", category)}
                  />
                </label>
              </li>
            );
          })}
        </ul>
        <h3 className="text-3xl border-b-8 border-primary">Company</h3>
        <ul>
          {companyArray.map((company) => {
            return (
              <li key={company}>
                <label>
                  {company}
                  <input
                    type="checkbox"
                    checked={filters.company.includes(company)}
                    onChange={() => handleCheckboxChange("company", company)}
                  />
                </label>
              </li>
            );
          })}
        </ul>
      </div>
      {filteredProducts?.length > 0
        ? filteredProducts.map((product) => {
            return <ProductSingleItem key={product.id} {...product} />;
          })
        : products.map((product) => {
            return <ProductSingleItem key={product.id} {...product} />;
          })}
    </div>
  );
};
export default ProductList;

import { Form } from "react-router-dom";
import { useProductContext } from "../pages/Products";
import { useEffect, useState } from "react";
import CheckboxFilter from "./CheckboxFilter";

const ProductFilterSection = () => {
  const { productsArray, filterProductsObject, setFilterProductsObject } =
    useProductContext();
  const categoryArray = [
    ...new Set(productsArray.map((product) => product.category)),
  ];
  const companyArray = [
    ...new Set(productsArray.map((product) => product.company)),
  ];
  console.log(productsArray);
  const [filters, setFilters] = useState({
    category: [],
    company: [],
  });
  const handleCheckboxChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: prevFilters[type].includes(value)
        ? prevFilters[type].filter((product) => product !== value)
        : [...prevFilters[type], value],
    }));
  };
  console.log("filters:" + filters.category);
  useEffect(() => {
    const filteredProducts = async () => {
      const filteredArray = await productsArray.filter((product) => {
        return (
          filters.category.length === 0 ||
          filters.category.includes(product.category)
        );
      });
      setFilterProductsObject(filteredArray);
      console.log("filteredArray:" + filteredArray.marcos);
    };
    filteredProducts();
  }, [filters.category, filters.company]);
  return (
    <div>
      <h3 className="text-3xl border-b-8 border-primary">Category</h3>
      <ul>
        {categoryArray.map((category) => {
          return (
            <li key={category}>
              <label>
                {category}
                <input
                  type="checkbox"
                  checked={filters.category.includes(category)}
                  onChange={() => handleCheckboxChange("category", category)}
                />
              </label>
            </li>
          );
        })}
      </ul>
      <h3 className="text-3xl border-b-8 border-primary">Company</h3>
      <ul>
        {companyArray.map((company) => {
          return (
            <li key={company}>
              <label>
                {company}
                <input
                  type="checkbox"
                  checked={filters.company.includes(company)}
                  onChange={() => handleCheckboxChange("company", company)}
                />
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ProductFilterSection;

*/
