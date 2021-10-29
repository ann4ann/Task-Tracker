import React from "react";
import PropTypes from "prop-types";

const RadioField = ({
  options,
  name,
  onChange,
  value,
  label,
  hasOptionNoneOfThis,
}) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      {options.map((option) => (
        <div
          key={option.name + "_" + option.value}
          className="form-check form-check"
        >
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={option.name + "_" + option.value}
            checked={option.value === value}
            value={option.value}
            onChange={onChange}
          />
          <label
            className={`form-check-label${option.isMainGoal && " fw-bold"}`}
            htmlFor={option.name + "_" + option.value}
          >
            {option.name}
          </label>
        </div>
      ))}
      {hasOptionNoneOfThis && (
        <div key="optionNoneOfThis" className="form-check form-check">
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id="optionNoneOfThis"
            checked={!value}
            value=""
            onChange={onChange}
          />
          <label
            className="form-check-label text-muted"
            htmlFor="optionNoneOfThis"
          >
            Ничего из этого
          </label>
        </div>
      )}
    </div>
  );
};

RadioField.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
  hasOptionNoneOfThis: PropTypes.bool,
};

export default RadioField;
