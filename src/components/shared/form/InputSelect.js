import React from "react";

const InputSelect = ({
  id,
  label,
  value,
  setStateFn,
  readOnlyProp,
  children,
}) => {
  return (
    <div className="col-md-2">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        className="custom-select"
        value={value}
        onChange={
          !readOnlyProp
            ? (e) => setStateFn(e.target.value)
            : null
        }
        readOnly={readOnlyProp}
      >
        {children}
      </select>
      <div className="valid-feedback">Looks good!</div>
    </div>
  );
};

export default InputSelect;
