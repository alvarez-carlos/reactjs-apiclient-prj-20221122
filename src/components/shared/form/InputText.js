import React from "react";

const InputText = ({ type, id, label, value, setStateFn, readOnlyProp }) => {
  return (
    <div className="col-md-2 ">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        className={"form-control inputfont"}
        id={id}
        placeholder={value}
        value={value}
        onChange={ !readOnlyProp ? (e) => setStateFn(e.target.value) : null }
        readOnly = {readOnlyProp}
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
  );
};

export default InputText;
