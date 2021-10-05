import React from "react";
import { Link } from "react-router-dom";

const AddTaskBtn = ({ alignBtn = "end" }) => {
  return (
    <Link
      to="/addtask"
      className={`btn m-1 btn-danger align-self-${alignBtn}`}
      role="button"
      style={{ height: "40px" }}
    >
      +
    </Link>
  );
};

export default AddTaskBtn;