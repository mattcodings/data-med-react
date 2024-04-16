const ShoppingCartItem = ({ item }) => {
  return (
    <li>
      <div className="flex flex-wrap gap-x-10 mb-20 items-center">
        <div className="w-[300px]">
          <img src={item.image} alt={item.name} width={300} />
        </div>
        <div className="w-2/3">
          <div className="flex justify-between flex-wrap gap-x-20">
            <h3 className="text-2xl inline-block capitalize">{item.name}</h3>
            <p className="text-2xl inline-block capitalize">${item.price}</p>
            <p className="text-2xl inline-block capitalize">{item.company}</p>

            <p className="text-2xl inline-block capitalize">{item.category}</p>
          </div>
          <p className="capitalize">{item.description}</p>
        </div>
      </div>
    </li>
  );
};
export default ShoppingCartItem;
