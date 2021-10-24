import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AddTaskBtn = ({ alignBtn = "end" }) => {
  return (
    <Link
      to="/addtask"
      className={`btn m-1 btn-danger align-self-${alignBtn} fw-bold`}
      role="button"
      style={{ height: "40px" }}
    >
      +
    </Link>
  );
};
AddTaskBtn.propTypes = {
  alignBtn: PropTypes.string,
};

export default AddTaskBtn;
