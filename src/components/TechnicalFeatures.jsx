import TechnicalFeature from "./TechnicalFeature";

// parent of technicalfeature components, holds info to display
const technicalFeatures = [
  {
    image: "/images/TechFeatures1.jpg",
    title: "Digital Formatting",
    description:
      "Enables information to be used and shared over secure networks",
  },
  {
    image: "images/TechFeatures2.jpg",
    title: "Tracking Care",
    description:
      "Allows prescriptions and outcomes to be shared with doctors and patients",
  },
  {
    image: "/images/TechFeatures3.jpg",
    title: "Technical Framework",
    description:
      "Enables information to move electronically between organizations",
  },
];
const TechnicalFeatures = () => {
  return (
    <>
      {technicalFeatures.map(({ image, title, description }) => {
        return (
          <TechnicalFeature
            key={title}
            image={image}
            title={title}
            description={description}
          />
        );
      })}
    </>
  );
};
export default TechnicalFeatures;
