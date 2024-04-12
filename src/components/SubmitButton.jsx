import { useNavigation } from "react-router-dom";

const SubmitButton = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button
      type="submit"
      className="btn btn-primary mt-5"
      disabled={isSubmitting}
    >
      {text}
    </button>
  );
};
export default SubmitButton;
