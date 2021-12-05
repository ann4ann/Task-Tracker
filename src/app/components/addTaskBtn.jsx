import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import setPosition from "../utils/setPosition";

const AddTaskBtn = ({ position = "bottom center" }) => {
  return (
    <Link
      to="/addtask"
      className={`btn m-1 btn-outline-dark fw-bold ${setPosition(
        position
      )}`}
      role="button"
      style={{ height: "40px" }}
    >
      +
    </Link>
  );
};
AddTaskBtn.propTypes = {
  position: PropTypes.string,
};

export default AddTaskBtn;
