import React from "react";
import { useState } from "react";

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
    <>
      <h1>AddTask</h1>
      <div>
        <label htmlFor="name">Название задачи</label>
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="importance">Важность</label>
        <input
          type="number"
          min="1"
          max="4"
          step="1"
          id="importance"
          name="importance"
          value={data.importance || 1}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="deadline">Срок до</label>
        <input
          type="datetime-local"
          id="deadline"
          name="deadline"
          value={data.deadline}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="duration">Длительность (часов)</label>
        <input
          type="text"
          list="durationList"
          id="duration"
          name="duration"
          value={data.duration}
          onChange={handleChange}
        ></input>
        <datalist id="durationList">
          <option value="5" />
          <option value="30" />
          <option value="60" />
          <option value="120" />
        </datalist>
      </div>
      <div>
        <label htmlFor="description">Описание</label>
        <textarea
          type="text"
          id="description"
          name="description"
          value={data.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="button">Отменить</button>
      <button type="submit">Сохранить</button>
    </>
  );
};

export default AddTask;
