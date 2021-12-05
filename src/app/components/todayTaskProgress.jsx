import React from "react";
import PropTypes from "prop-types";

const TodayTaskProgress = ({ taskData }) => {
  console.log(taskData);
  return (
    <div className="d-flex justify-content-center">
      <div>Progress</div>
    </div>
  );
};

TodayTaskProgress.propTypes = {
  taskData: PropTypes.object,
};

export default TodayTaskProgress;
