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
  onOpenTask,
}) => {
  return (
    <label key={id} className={"list-group-item mt-1 list-group-item-" + color}>
      <p className="text-center">{name}</p>
      <button className="btn btn-primary w-100" onClick={() => onOpenTask(id)}>
        Приступить
      </button>
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
  onOpenTask: PropTypes.func,
};

export default TaskItemRow;
