import PropTypes from "prop-types";
const FormInput = ({ name, label, type, defaultValue }) => {
  return (
    <div>
      <label className="form-control">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <input
          type={type}
          placeholder={defaultValue}
          defaultValue={defaultValue}
          className="input input-bordered w-full max-w-xs"
          name={name}
        />
      </label>
    </div>
  );
};
FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
};
export default FormInput;
