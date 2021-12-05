import React from "react";
import TaskItemBlock from "./taskItemBlock";
import PropTypes from "prop-types";

const TaskBlock = ({ tasksArray, color, onCloseTask }) => {
  return (
    <div
      className="d-flex flex-row flex-wrap align-items-start pt-2"
      // className={`d-inline-flex flex-${direction} flex-wrap h-100 w-100 align-items-start bg-info pt-3`}
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
  );
};

TaskBlock.propTypes = {
  tasksArray: PropTypes.array,
  // title: PropTypes.string,
  // direction: PropTypes.string,
  color: PropTypes.string,
  onCloseTask: PropTypes.func,
};

export default TaskBlock;
