import React, { useEffect } from "react";
import { useState } from "react";
import RadioField from "../components/common/form/radioField";
import SelectField from "../components/common/form/selectField";
import TextField from "../components/common/form/textField";
import API from "../api";

const AddTask = () => {
  const [goals, setGoals] = useState();
  const [data, setData] = useState({
    name: "",
    importance: "",
    deadline: "",
    duration: "5",
    belongsToGoal: "",
    description: "",
  });

  useEffect(() => {
    API.goals.fetchAll().then((data) => {
      setGoals(data);
    });
  }, []);

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  return (
    <div className="overflow-auto container mt-5 shadow w-50">
      <div className="p-5">
        <h1 className="mb-3">Добавить задачу</h1>
        <form action="">
          <TextField
            label="Название задачи"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          <RadioField
            options={
              goals
                ? goals.map((goal) => ({
                  name: goal.name,
                  value: goal.id,
                  isMainGoal: goal.isMainGoal,
                }))
                : []
            }
            name="belongsToGoal"
            onChange={handleChange}
            value={data.belongsToGoal}
            label="Является частью цели?"
            hasOptionNoneOfThis={true}
          />
          <div className="mb-3">
            <label className="form-label" htmlFor="importance">
              Важность
            </label>
            <input
              className="form-range"
              type="range"
              min="1"
              max="4"
              step="1"
              id="importance"
              name="importance"
              value={data.importance || 1}
              onChange={handleChange}
            ></input>
          </div>
          <TextField
            label="Срок до"
            type="date"
            name="deadline"
            value={data.deadline}
            onChange={handleChange}
          />
          <SelectField
            options={[
              { name: "5 минут", value: 5 },
              { name: "30 минут", value: 30 },
              { name: "1 час", value: 60 },
              { name: "2 часа", value: 120 },
            ]}
            label="Выберите продолжительность"
            onChange={handleChange}
            value={data.duration}
            name="duration"
          />
          <div className="mb-3">
            <label className="form-label" htmlFor="description">
              Описание
            </label>
            <textarea
              className="form-control"
              rows="3"
              type="text"
              id="description"
              name="description"
              value={data.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="btn btn-outline-primary w-100 mb-3" type="button">
            Отменить
          </button>
          <button className="btn btn-primary w-100 mb-3" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
