// преренести в common, перед этим доавить props: link, color
import React from "react";
import { Link } from "react-router-dom";
import setPosition from "../utils/setPosition";
import PropTypes from "prop-types";

const GoToToday = ({ position }) => {
  return (
    <div className={`pb-3 ${setPosition(position)}`}>
      <Link
        to="/today"
        // className={"btn btn-secondary btn-lg fw-bold" + setPosition(position)}
        className="btn btn-secondary btn-lg fw-bold"
        role="button"
      >
        TODAY
      </Link>
    </div>
  );
};

GoToToday.propTypes = {
  position: PropTypes.string,
};

export default GoToToday;
