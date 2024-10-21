import PropTypes from "prop-types";
const ShoppingCartItem = ({ item, deleteItem }) => {
  // displays the individual item in the cart in checkout page
  return (
    <li className="border-b-2 my-8">
      <div className="flex flex-wrap gap-x-10 mb-8 items-center">
        <div className="w-[300px]">
          <img src={item.image} alt={item.name} width={300} />
        </div>
        <div className="lg:w-2/3">
          <div className="flex justify-between flex-wrap gap-x-20">
            <h3 className="text-2xl inline-block capitalize">{item.name}</h3>
            <p className="text-2xl inline-block capitalize">${item.price}</p>
            <p className="text-2xl inline-block capitalize">{item.company}</p>

            <p className="text-2xl inline-block capitalize">{item.category}</p>
          </div>
          <p className="capitalize">{item.description}</p>
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={() => deleteItem(item.uid)}
          className="btn bg-primary text-accent w-56 text-2xl mb-8"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

ShoppingCartItem.propTypes = {
  item: PropTypes.object.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
export default ShoppingCartItem;
