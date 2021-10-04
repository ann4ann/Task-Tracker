import React, { useEffect, useState } from "react";
import api from "../api/index";
import TaskItemBlock from "./taskItemBlock";

const AllTasks = () => {
  // const initialState = api.tasks.fetchAll();
  const [allTasks, setAllTasks] = useState();
  const [tasks, setTasks] = useState();
  const [closedTasks, setClosedTasks] = useState();
  //   tasks.filter((item) => item.status === false)
  // );

  useEffect(() => {
    api.tasks.fetchAll().then((data) => {
      setAllTasks(data);
    });
  }, []);

  useEffect(() => {
    setTasks(
      allTasks ? allTasks.filter((item) => item.status === false) : null
    );
    setClosedTasks(
      allTasks ? allTasks.filter((item) => item.status === true) : null
    );
  }, [allTasks]);

  // useEffect(() => {

  // }, [tasks.status]);

  const handleCloseTask = (taskId) => {
    const newTasks = allTasks.map((task) => {
      if (task._id === taskId) {
        task.status = !task.status;
      }
      return task;
    });
    setAllTasks(newTasks);
  };

  return (
    <>
      <div
        className="d-flex bg-primary "
        style={{ width: "100vw", height: "100vh" }}
      >
        <div className="d-flex flex-column flex-grow-1 bg-secondary">
          <div>В работе:</div>
          <div className="flex-fill bg-primary">
            {tasks &&
              tasks.map((task) => (
                <TaskItemBlock
                  key={task._id}
                  id={task._id}
                  name={task.name}
                  status={task.status}
                  importance={task.importance}
                  deadline={task.deadline}
                  belongToGoal={task.belongToGoal}
                  onCloseTask={handleCloseTask}
                ></TaskItemBlock>
              ))}
          </div>
        </div>

        <div className="d-flex flex-column bg-danger">
          <div>Выполнено:</div>
          <div className="flex-fill bg-primary">
            {closedTasks &&
              closedTasks.map((task) => (
                <TaskItemBlock
                  key={task._id}
                  id={task._id}
                  name={task.name}
                  status={task.status}
                  importance={task.importance}
                  deadline={task.deadline}
                  belongToGoal={task.belongToGoal}
                  onCloseTask={handleCloseTask}
                ></TaskItemBlock>
              ))}
          </div>
        </div>
      </div>
    </>
  );

  // tasks.map((task) => {
  //   return (
  //     <TaskItemBlock
  //       id={task._id}
  //       name={task.name}
  //       status={task.status}
  //       importance={task.importance}
  //       deadline={task.deadline}
  //       belongToGoal={task.belongToGoal}
  //       onCloseTask={handleCloseTask}
  //     ></TaskItemBlock>
  //   );
  // });
};

export default AllTasks;
