import React from "react";

const Input = ({
  label,
  placeholder,
  type,
  value,
  onChange,
  errorPassword,
}) => {
  return (
    <div className="group">
      <label>{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      ></input>
      {/* {errorPassword && <p>{errorPassword}</p>} */}
    </div>
  );
};

export default Input;
