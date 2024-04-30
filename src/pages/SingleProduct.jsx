import { useNavigate, useParams } from "react-router-dom";
import { products } from "../productitems";

const SingleProduct = () => {
  const { id } = useParams();

  const singleItem = products.find((product) => product.id === id);
  console.log(id);
  console.log(products);
  console.log(singleItem);
  const navigate = useNavigate();
  const { name, price, company, description, image } = singleItem;
  return (
    <div>
      <button
        className="btn bg-primary text-accent mt-8 mx-8"
        onClick={() => navigate("/products")}
      >
        Back To Products
      </button>
      <div className="flex w-[80%] mx-auto gap-x-20 mt-32 flex-wrap lg:flex-nowrap">
        <img src={image} className="h-56 w-64 mb-8" />
        <div>
          <h3 className="text-3xl">{name}</h3>
          <h5 className="text-2xl">Price: {price}</h5>
          <h3 className="text-2xl">Company: {company}</h3>
          <p className="text-2xl">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
