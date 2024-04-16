import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../productitems";

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const singleItem = products.find((product) => product.id === id);
  console.log(id);
  console.log(products);
  console.log(singleItem);

  const { name, price, company, description, image } = singleItem;
  return (
    <div className="flex">
      <img src={image} />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <h3>Company: {company}</h3>
        <h5>Price: {price}</h5>
      </div>
    </div>
  );
};
export default SingleProduct;
