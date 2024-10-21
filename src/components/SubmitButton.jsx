import { useNavigation } from "react-router-dom";
import PropTypes from "prop-types";

// reusable submit button that determines if button is disabled based on submit pending
const SubmitButton = ({ text }) => {
  // useNavigation is a hook that determines data loading
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

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
};
export default SubmitButton;
