import { useState } from "react";

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
export default CheckboxFilter;
