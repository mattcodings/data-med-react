const TechnicalFeature = ({ image, title, description }) => {
  return (
    <div className="border w-96 xl:w-1/3 p-8 text-center mx-auto">
      <img src={image} />
      <h3 className="text-3xl pb-5">{title}</h3>
      <p className="text-2xl text-left">{description}</p>
    </div>
  );
};
export default TechnicalFeature;
