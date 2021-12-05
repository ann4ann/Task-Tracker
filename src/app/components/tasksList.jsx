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
    <>
      <div className="h-100">
        <div className="container-xl h-100">
          <div className="row justify-content-center h-100">
            {/* Задачи по 4 категориям */}
            <div className="col-col-sm-9 col-md-10">
              {/* СТРОКА 1 */}
              <div className="row justify-content-center min-vh-50 h-50">
                {/* Важно и срочно */}
                <div className="col-sm border-end border-bottom border-danger">
                  <div className="w-100 h-100 position-relative">
                    <div className="pe-5">
                      <div className="fs-4 fw-bold">Важно и срочно</div>
                      <TaskBlock
                        tasksArray={impUrgTasks}
                        color="danger"
                        onCloseTask={handleCloseTask}
                      ></TaskBlock>
                    </div>
                    <AddTaskBtn position="bottom right" />
                  </div>
                </div>
                {/* Важно и несрочно */}
                <div className="col-sm border-bottom border-start border-success">
                  <div className="w-100 h-100 position-relative">
                    <div className="ps-5">
                      <div className="fs-4 fw-bold">Важно и несрочно</div>
                      <TaskBlock
                        tasksArray={impNotUrgTasks}
                        color="success"
                        onCloseTask={handleCloseTask}
                      ></TaskBlock>
                    </div>
                    <AddTaskBtn position="bottom left" />
                  </div>
                </div>
              </div>
              {/* СТРОКА 2 */}
              <div className="row justify-content-center min-vh-50 h-50">
                {/* Неважно и срочно */}
                <div className="col-sm border-top border-end border-warning">
                  <div className="w-100 h-100 position-relative">
                    <div className="pe-5">
                      <div className="fs-4 fw-bold">Неважно и срочно</div>
                      <TaskBlock
                        tasksArray={notImpUrgTasks}
                        color="warning"
                        onCloseTask={handleCloseTask}
                      ></TaskBlock>
                    </div>
                    <AddTaskBtn position="top right" />
                  </div>
                </div>
                {/* Неважно и несрочно */}
                <div className="col-sm border-start border-top border-light">
                  <div className="w-100 h-100 position-relative">
                    <div className="ps-5">
                      <div className="fs-4 fw-bold">Неважно и несрочно</div>
                      <TaskBlock
                        tasksArray={notImpNotUrgTasks}
                        color="light"
                        onCloseTask={handleCloseTask}
                      ></TaskBlock>
                    </div>
                    <AddTaskBtn position="top left" />
                  </div>
                </div>
              </div>
            </div>
            {/* Колонка Выполнено */}
            <div className="col bg-secondary bg-opacity-25 mh-100">
              <div className="w-100 h-100 position-relative">
                <div className="fs-4 fw-bold">Выполнено</div>
                <TaskBlock
                  tasksArray={closedTasks}
                  title="Выполнено"
                  // direction="column"
                  color="transparent"
                  onCloseTask={handleCloseTask}
                ></TaskBlock>
                {/* Кнопка TODAY */}
                <GoToToday position="bottom center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TasksList;
