import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const url = "https://course-api.com/react-store-single-product?id=";
const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const fetchSingleProduct = async () => {
    try {
      const result = await axios.get(`${url + id}`);
      const data = await result.data;
      setSingleProduct(data);
      setIsLoading(false);
    } catch (error) {}
  };
  useEffect(() => {
    fetchSingleProduct();
  }, []);
  const { name, stock, price, company, description, images } = singleProduct;
  return (
    <div>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <img src={images?.[0]?.url} />
          <h2>{name}</h2>
          <p>{description}</p>
          <h3>Company: {company}</h3>
          <h5>Price: {price}</h5>
          <span>{stock > 0 ? stock : "Out of stock"}</span>
        </div>
      )}
    </div>
  );
};
export default SingleProduct;
