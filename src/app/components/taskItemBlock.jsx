import React from "react";
import PropTypes from "prop-types";

const TaskItemBlock = ({
  id,
  name,
  status,
  importance,
  deadline,
  // belongToGoal,
  color,
  onCloseTask,
}) => {
  return (
    <div key={id} className={"card m-2 bg-opacity-75 bg-" + color}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-1 text-muted">imp {importance}</h6>
        <h6 className="card-subtitle mb-1 text-muted">urg {deadline}</h6>
        <div className="form-check form-switch">
          <input
            onClick={() => onCloseTask(id)}
            className="form-check-input"
            type="checkbox"
            defaultChecked={status}
            id={id}
          />
          <label className="form-check-label" htmlFor={id}>
            Done
          </label>
        </div>
      </div>
    </div>
  );
};

TaskItemBlock.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.bool,
  importance: PropTypes.number,
  deadline: PropTypes.number,
  // belongToGoal: PropTypes.string,
  color: PropTypes.string,
  onCloseTask: PropTypes.func,
};

export default TaskItemBlock;
