import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, functionBtn, name }) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={functionBtn}>
      {name}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  functionBtn: PropTypes.func,
  name: PropTypes.string,
};

export default Button;
