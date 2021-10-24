import React, { useEffect, useState } from "react";
import API from "../api/index";
import AddTaskBtn from "./addTaskBtn";
import GoToToday from "./goToTodayBtn";
import TaskBlock from "./tasksBlock";

const TasksList = () => {
  // const initialState = api.tasks.fetchAll();
  const [allTasks, setAllTasks] = useState();
  // const [tasks, setTasks] = useState();
  const [closedTasks, setClosedTasks] = useState();
  const [impUrgTasks, setImpUrgTasks] = useState();
  const [impNotUrgTasks, setImpNotUrgTasks] = useState();
  const [notImpUrgTasks, setNotImpUrgTasks] = useState();
  const [notImpNotUrgTasks, setNotImpNotUrgTasks] = useState();
  //   tasks.filter((item) => item.status === false)
  // );

  useEffect(() => {
    API.tasks.fetchAll().then((data) => {
      setAllTasks(data);
    });
  }, []);

  useEffect(() => {
    const allOpenTasks = allTasks
      ? allTasks.filter((item) => item.status === false)
      : null;
    setImpUrgTasks(
      allTasks
        ? allOpenTasks.filter(
            (item) => item.importance > 2 && item.deadline > 2
          )
        : null
    );
    setImpNotUrgTasks(
      allTasks
        ? allOpenTasks.filter(
            (item) => item.importance > 2 && item.deadline <= 2
          )
        : null
    );
    setNotImpUrgTasks(
      allTasks
        ? allOpenTasks.filter(
            (item) => item.importance <= 2 && item.deadline > 2
          )
        : null
    );
    setNotImpNotUrgTasks(
      allTasks
        ? allOpenTasks.filter(
            (item) => item.importance <= 2 && item.deadline <= 2
          )
        : null
    );
    setClosedTasks(
      allTasks ? allTasks.filter((item) => item.status === true) : null
    );
  }, [allTasks]);

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
    <div className="d-flex bg-primary p-2 " style={{ height: "94vh" }}>
      {/* Задачи по 4 категориям */}
      <div className="d-flex flex-column justify-content-between flex-grow-1 bg-dark">
        {/* СТРОКА 1 */}
        <div
          className="d-flex bg-dark "
          style={{ width: "100%", height: "100%" }}
        >
          {/* Важно и срочно */}
          <div className="d-flex" style={{ width: "50%" }}>
            <TaskBlock
              tasksArray={impUrgTasks}
              color="danger"
              onCloseTask={handleCloseTask}
            ></TaskBlock>
            <AddTaskBtn />
          </div>
          {/* Важно и несрочно */}
          <div className="d-flex bg-light" style={{ width: "50%" }}>
            <AddTaskBtn />
            <TaskBlock
              tasksArray={impNotUrgTasks}
              color="success"
              onCloseTask={handleCloseTask}
            ></TaskBlock>
          </div>
        </div>
        {/* СТРОКА 2 */}
        <div
          className="d-flex bg-light "
          style={{ width: "100%", height: "100%" }}
        >
          {/* Неважно и срочно */}
          <div className="d-flex" style={{ width: "50%" }}>
            <TaskBlock
              tasksArray={notImpUrgTasks}
              color="warning"
              onCloseTask={handleCloseTask}
            ></TaskBlock>
            <AddTaskBtn alignBtn="start" />
          </div>
          {/* Неважно и несрочно */}
          <div className="d-flex bg-dark" style={{ width: "50%" }}>
            <AddTaskBtn alignBtn="start" />
            <TaskBlock
              tasksArray={notImpNotUrgTasks}
              color="light"
              onCloseTask={handleCloseTask}
            ></TaskBlock>
          </div>
        </div>
      </div>

      {/* Колонка Выполнено */}
      <div
        className="d-flex flex-column justify-content-between p-2 bg-danger "
        style={{ width: "176px" }}
      >
        <TaskBlock
          tasksArray={closedTasks}
          title="Выполнено"
          direction="column"
          color="info"
          onCloseTask={handleCloseTask}
        ></TaskBlock>
        {/* Кнопка TODAY */}
        <GoToToday />
      </div>
    </div>
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

export default TasksList;
