import { Form } from "react-router-dom";
import { useProductContext } from "../pages/Products";
import { useEffect, useState } from "react";
import CheckboxFilter from "./CheckboxFilter";

const ProductFilterSection = () => {
  const { productsArray, filterProductsObject, setFilterProductsObject } =
    useProductContext();
  // create arrays to display checkboxes, using set to remove duplicates
  const categoryArray = [
    ...new Set(productsArray.map((product) => product.category)),
  ];
  const companyArray = [
    ...new Set(productsArray.map((product) => product.company)),
  ];

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

  useEffect(() => {
    const filteredProducts = () => {
      let filteredArray;
      if (filters.category.length > 0 && filters.company.length > 0) {
        filteredArray = productsArray.filter((product) => {
          return (
            filters.company.includes(product.company) &&
            filters.category.includes(product.category)
          );
        });
      } else if (filters.category.length > 0) {
        filteredArray = productsArray.filter((product) => {
          return (
            filters.category.length === 0 ||
            filters.category.includes(product.category)
          );
        });
      } else if (filters.company.length > 0) {
        filteredArray = productsArray.filter((product) => {
          return (
            filters.company.length === 0 ||
            filters.company.includes(product.company)
          );
        });
      }
      setFilterProductsObject(filteredArray);
    };
    filteredProducts();
  }, [filters.category, filters.company]);
  return (
    <div className="bg-[#ddd] p-8">
      <h3 className="text-3xl border-b-8 border-primary">Category</h3>
      <ul>
        {categoryArray.map((category) => {
          return (
            <li key={category}>
              <label className="capitalize">
                <input
                  className="m-2"
                  type="checkbox"
                  checked={filters.category.includes(category)}
                  onChange={() => handleCheckboxChange("category", category)}
                />
                {category}
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
              <label className="capitalize">
                <input
                  className="m-2"
                  type="checkbox"
                  checked={filters.company.includes(company)}
                  onChange={() => handleCheckboxChange("company", company)}
                />
                {company}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ProductFilterSection;
