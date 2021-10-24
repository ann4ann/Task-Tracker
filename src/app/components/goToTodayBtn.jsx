import React from "react";
import { Link } from "react-router-dom";

const GoToToday = () => {
  return (
    <Link to="/today" className="btn btn-warning btn-lg fw-bold" role="button">
      TODAY
    </Link>
  );
};

export default GoToToday;
