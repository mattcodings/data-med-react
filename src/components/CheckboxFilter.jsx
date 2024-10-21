import { useState } from "react";
import PropTypes from "prop-types";
const CheckboxFilter = ({
  name,
  type,
  currentlyChecked,
  handleCheckboxChange,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const onCheckboxChange = () => {
    const checkedState = !isChecked;
    setIsChecked(checkedState);
    handleCheckboxChange(name, checkedState);
  };
  return (
    <label className="label cursor-pointer">
      <span className="label-text text-accent">{name}</span>
      <input
        type="checkbox"
        className="checkbox checkbox-accent"
        defaultChecked={currentlyChecked}
        checked={isChecked}
        value={name}
        name={type}
        onChange={onCheckboxChange}
      />
    </label>
  );
};

CheckboxFilter.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  currentlyChecked: PropTypes.bool.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};
export default CheckboxFilter;
