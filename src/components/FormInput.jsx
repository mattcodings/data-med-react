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
export default FormInput;
