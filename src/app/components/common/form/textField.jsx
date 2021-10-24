import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, name, value, onChange }) => {
  return (
    <div className="input-group mb-3">
      <label htmlFor={name}>{label}</label>
      <input
        className="w-100 mx-auto fs-5"
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

TextField.defaultProps = {
  type: "text",
};

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextField;
