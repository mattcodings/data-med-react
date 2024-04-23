import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../productitems";

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const singleItem = products.find((product) => product.id === id);
  console.log(id);
  console.log(products);
  console.log(singleItem);
  const navigate = useNavigate();
  const { name, price, company, description, image } = singleItem;
  return (
    <div className="flex w-[80%] mx-auto gap-x-20 mt-52">
      <img src={image} />
      <div>
        <h3 className="text-3xl">{name}</h3>
        <h5 className="text-2xl">Price: {price}</h5>
        <h3 className="text-2xl">Company: {company}</h3>
        <p className="text-2xl">{description}</p>
      </div>
      <button className="btn" onClick={() => navigate("/products")}>
        Back To Products
      </button>
    </div>
  );
};
export default SingleProduct;
