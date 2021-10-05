import React from "react";
import TaskItemBlock from "./taskItemBlock";

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
        className={`d-flex flex-${direction} flex-fill bg-info bg-opacity-25`}
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

export default TaskBlock;
