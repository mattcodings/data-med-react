const CheckoutInformationInput = ({
  name,
  value,
  onChange,
  placeholder,
  type,
}) => {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">*{placeholder}</span>
      </div>
      <input
        type={type}
        className="input input-bordered input-primary w-full max-w-xs"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </label>
  );
};
export default CheckoutInformationInput;
