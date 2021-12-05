import React from "react";
import TodayTaskProgress from "./todayTaskProgress";
import PropTypes from "prop-types";

const TodayTaskBlock = ({ taskData }) => {
  return (
    <div className="bg-warning p-3">
      <h1 className="text-center">{taskData.name}</h1>
      <div className="d-flex justify-content-between">
        <TodayTaskProgress taskData={taskData} />
        <div className="align-self-center">
          <input
            type="checkbox"
            className="btn-check"
            id={name}
            autoComplete="off"
          />
          <label
            className="btn btn-sm btn-outline-primary w-100"
            htmlFor={name}
          >
            Приступить!
          </label>
        </div>
      </div>
    </div>
  );
};

TodayTaskBlock.propTypes = {
  taskData: PropTypes.object,
};

export default TodayTaskBlock;
