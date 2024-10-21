import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import PropTypes from "prop-types";

// single product item in products page
const ProductSingleItem = ({
  id,
  name,
  price,
  image,
  company,
  category,
  description,
  uid,
}) => {
  // update the global shopping cart found in the navbar
  const { updateShoppingCart } = useGlobalContext();
  return (
    <div className="bg-[#eee] my-20 p-8">
      <div className="flex gap-x-20 flex-wrap lg:flex-nowrap">
        <img src={image || ""} className="h-56 w-64" />
        <div>
          <h3 className="text-3xl">{name}</h3>
          <h4 className="text-2xl">${price}</h4>

          <h5 className="text-2xl">{company}</h5>
          <h5 className="text-2xl">{category}</h5>
          <h5>{description}</h5>
        </div>
      </div>
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
  );
};

ProductSingleItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  uid: PropTypes.number.isRequired,
};

export default ProductSingleItem;
