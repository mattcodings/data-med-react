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
      <div className="flex gap-x-20">
        <img src={image || ""} width={300} />
        <div>
          <h3 className="text-3xl">{name}</h3>
          <h4 className="text-2xl">${price}</h4>

          <h5 className="text-2xl">{company}</h5>
          <h5 className="text-2xl">{category}</h5>
          <h5>{description}</h5>
          <div className="flex justify-evenly mt-5">
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
      </div>
    </div>
  );
};
export default ProductSingleItem;
