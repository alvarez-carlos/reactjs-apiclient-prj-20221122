import React from "react";

const InputCheck = ({ id, label, value, setStateFn, readOnlyProp }) => {
  return (
    <div className="form-group">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value={value}
          id={id}
        />
        <label className="form-check-label" for="invalidCheck">
          {label}
        </label>
        <div className="invalid-feedback">
          You must check the checkbox before submitting.
        </div>
      </div>
    </div>
  );
};

export default InputCheck;
