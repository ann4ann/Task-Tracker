import React from "react";
import TaskItemBlock from "./taskItemBlock";
import PropTypes from "prop-types";

const TaskBlock = ({
  tasksArray,
  title = null,
  direction = "row",
  color,
  onCloseTask,
}) => {
  return (
    <>
      {title ? <h4>{title}:</h4> : null}
      <div
        className={`d-flex flex-${direction} flex-wrap flex-fill m-1 bg-info bg-opacity-25`}
      >
        {tasksArray &&
          tasksArray.map((task) => (
            <TaskItemBlock
              key={task._id}
              id={task._id}
              name={task.name}
              status={task.status}
              importance={task.importance}
              deadline={task.deadline}
              belongToGoal={task.belongToGoal}
              color={color}
              onCloseTask={onCloseTask}
            ></TaskItemBlock>
          ))}
      </div>
    </>
  );
};

TaskBlock.propTypes = {
  tasksArray: PropTypes.array,
  title: PropTypes.string,
  direction: PropTypes.string,
  color: PropTypes.string,
  onCloseTask: PropTypes.func,
};

export default TaskBlock;
