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
}) => {
  const { shoppingCart, updateShoppingCart } = useGlobalContext();
  // const { shoppingCart, updateShoppingCart } = useContext(NavbarContext);
  return (
    <div>
      <Link to={`/products/${id}`}>See Full Description</Link>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <img src={image || ""} width={300} />
      <h5>{company}</h5>
      <h5>{category}</h5>
      <h5>{description}</h5>
      <h5>{featured ? "featured" : "not featured"}</h5>
      <button
        onClick={() =>
          updateShoppingCart({
            name,
            price,
            image,
            company,
            category,
            description,
          })
        }
        className="btn"
      >
        Add Item
      </button>
    </div>
  );
};
export default ProductSingleItem;
