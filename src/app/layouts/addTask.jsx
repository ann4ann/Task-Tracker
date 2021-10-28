import React from "react";
import { useState } from "react";
import TextField from "../components/common/form/textField";

const AddTask = () => {
  const [data, setData] = useState({
    name: "",
    importance: "",
    deadline: "",
    duration: "",
    belongsToGoal: "",
    description: "",
  });

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
    console.log(target.name, target.value);
  };

  return (
    <div className="container mt-5 shadow w-50">
      <div className="p-5">
        <h1 className="mb-3">Добавить задачу</h1>
        <form action="">
          <TextField
            label="Название задачи"
            name="name"
            value={data.name}
            onChange={handleChange}
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
          <div className="mb-3">
            <label className="form-label" htmlFor="deadline">
              Срок до
            </label>
            <input
              className="form-control"
              // type="datetime-local"
              type="date"
              id="deadline"
              name="deadline"
              value={data.deadline}
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-3">
            <select className="form-select" aria-label="Default select example">
              <option selected>Выберите продолжительность</option>
              <option value="1">5 минут</option>
              <option value="1">30 минут</option>
              <option value="2">1 час</option>
              <option value="3">2 часа</option>
            </select>
          </div>
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
          <button
            className="btn btn-outline-primary w-100 mb-3"
            type="button"
          >
            Отменить
          </button>
          <button
            className="btn btn-primary w-100 mb-3"
            type="submit"
          >
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
