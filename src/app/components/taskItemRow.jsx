import React from "react";
import PropTypes from "prop-types";

const TaskItemRow = ({
  id,
  name,
  // status,
  // importance,
  // deadline,
  // belongToGoal,
  color,
  // onCloseTask,
}) => {
  return (
    <label key={id} className={"list-group-item mt-1 list-group-item-" + color}>
      <p className="text-center">{name}</p>
      <input
        type="checkbox"
        className="btn-check"
        id={name}
        autoComplete="off"
      />
      <label className="btn btn-sm btn-outline-primary w-100" htmlFor={name}>
        Приступить!
      </label>
    </label>
  );
};

TaskItemRow.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.bool,
  importance: PropTypes.number,
  deadline: PropTypes.number,
  // belongToGoal: PropTypes.string,
  color: PropTypes.string,
  onCloseTask: PropTypes.func,
};

export default TaskItemRow;
