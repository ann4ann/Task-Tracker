import React, { useState, useEffect } from "react";
import TaskRowBlock from "../components/tasksRowBlock";
import API from "../api";
import TodayTaskBlock from "../components/todayTaskBlock";

const Today = () => {
  const [allTasks, setAllTasks] = useState();
  const [impTasks, setImpTasks] = useState();
  const [notImpTasks, setNotImpTasks] = useState();

  useEffect(() => {
    API.tasks.fetchAll().then((data) => {
      setAllTasks(data);
    });
  }, []);

  useEffect(() => {
    const allOpenTasks = allTasks
      ? allTasks.filter((item) => item.status === false)
      : null;
    setImpTasks(
      allTasks ? allOpenTasks.filter((item) => item.importance > 2) : null
    );
    setNotImpTasks(
      allTasks ? allOpenTasks.filter((item) => item.importance <= 2) : null
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
    <div className="d-flex w-100 h-100 mh-100">
      {/* Панель слева */}
      <div className="overflow-auto mh-100 bg-primary bg-opacity-25 p-1">
        <h3>Задачи на сегодня:</h3>
        <TaskRowBlock
          title="Важное"
          tasksArray={impTasks}
          color="danger"
          onCloseTask={handleCloseTask}
        />
        <TaskRowBlock
          title="Неважное"
          tasksArray={notImpTasks}
          color="info"
          onCloseTask={handleCloseTask}
        />
      </div>

      {/* Панель справа */}
      <div className="w-100 p-3 bg-info  bg-opacity-25">
        <div className="bg-info pb-3">
          <div>Случайная мотивация: ..................................</div>
          <div>Ваша главная цель: ..................................</div>
        </div>
        <TodayTaskBlock />
        <button className="btn btn-lg btn-primary mb-5 me-3 position-absolute bottom-0 end-0">
          к следующей
        </button>
      </div>
    </div>
  );
};

export default Today;
