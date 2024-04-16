import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const ProductSingleItem = ({
  id,
  name,
  price,
  image,
  company,
  category,
  featured,
  description,
  uid,
}) => {
  const { shoppingCart, updateShoppingCart } = useGlobalContext();
  // const { shoppingCart, updateShoppingCart } = useContext(NavbarContext);
  return (
    <div className="bg-[#eee] my-20 p-8">
      <div className="flex">
        <img src={image || ""} width={300} />
        <div>
          <h3>{name}</h3>
          <h4>{price}</h4>

          <h5>{company}</h5>
          <h5>{category}</h5>
          <h5>{description}</h5>
        </div>
      </div>
      <div className="flex justify-evenly">
        <button
          onClick={() =>
            updateShoppingCart({
              uid,
              name,
              price,
              image,
              company,
              category,
              description,
            })
          }
          className="btn bg-primary text-white"
        >
          Add Item
        </button>
        <Link to={`/products/${id}`}>
          <button className="btn bg-primary text-white">
            See Full Description
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ProductSingleItem;
