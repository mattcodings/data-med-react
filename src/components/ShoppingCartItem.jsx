const ShoppingCartItem = ({ item }) => {
  return (
    <div className="flex gap-8 mb-20">
      <img src={item.image} alt={item.name} width={300} />
      <div>
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <p>{item.company}</p>
        <p>{item.category}</p>
        <p>{item.description}</p>
      </div>
    </div>
  );
};
export default ShoppingCartItem;
