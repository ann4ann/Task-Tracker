import React from "react";
import PropTypes from "prop-types";

const SelectField = ({
  options,
  label,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <select
        className="form-select"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      >
        {/* <option disabled value="">
          {defaultOption}
        </option> */}
        {options.map((option) => (
          <option value={option.value} key={option.value}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};

SelectField.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SelectField;
