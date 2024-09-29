import React from "react";

const InputTextBox = ({
  label,
  placeholder,
  value,
  handleChange,
  type = "text",
  required,
}) => {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      {required && <span style={{ color: "red" }}>*</span>}
      <input
        type={type}
        className="form-control"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputTextBox;
