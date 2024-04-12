import EHRFeature from "./EHRFeature";
const ehrFeatures = [
  {
    title: "Quality",
    description:
      "Several studies call into question whether EHRs improve the quality of care. One 2011 study in diabetes care, published in the New England Journal of Medicine, found evidence that practices with EHR provided better quality care.",
  },
  {
    title: "Costs",
    description:
      "The steep price of EHR and provider uncertainty regarding the value they will derive from adoption in the form of return on investment has a significant influence on EHR adoption.",
  },
  {
    title: "Time",
    description:
      "The implementation of EMR can potentially decrease identification time of patients upon hospital admission. A research from the Annals of Internal Medicine showed that since the adoption of EMR a relative decrease in time by 65% has been recorded (from 130 to 46 hours).",
  },
];
const EHRFeatures = () => {
  return (
    <>
      {ehrFeatures.map(({ title, description }) => {
        return (
          <EHRFeature key={title} title={title} description={description} />
        );
      })}
    </>
  );
};
export default EHRFeatures;
