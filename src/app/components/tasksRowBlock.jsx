import React from "react";
import TaskItemRow from "./taskItemRow";
import PropTypes from "prop-types";

const TaskRowBlock = ({
  tasksArray,
  title = null,
  // direction = "row",
  color,
  onOpenTask,
}) => {
  return (
    <>
      <div className="list-group pt-4 w-100">
        {title ? <h4>{title}:</h4> : null}
        {tasksArray &&
          tasksArray.map((task) => (
            <TaskItemRow
              key={task._id}
              id={task._id}
              name={task.name}
              status={task.status}
              importance={task.importance}
              deadline={task.deadline}
              belongToGoal={task.belongToGoal}
              color={color}
              onOpenTask={onOpenTask}
            ></TaskItemRow>
          ))}
      </div>
    </>
  );
};

TaskRowBlock.propTypes = {
  tasksArray: PropTypes.array,
  title: PropTypes.string,
  direction: PropTypes.string,
  color: PropTypes.string,
  onOpenTask: PropTypes.func,
};

export default TaskRowBlock;
