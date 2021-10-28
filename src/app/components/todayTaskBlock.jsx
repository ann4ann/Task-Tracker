import React from "react";
import TodayTaskProgress from "./todayTaskProgress";

const TodayTaskBlock = () => {
  return (
    <div className="bg-warning p-3">
      <h1 className="text-center">Task name</h1>
      <div className="d-flex justify-content-between">
        <TodayTaskProgress />
        <div className="align-self-center">
          <input
            type="checkbox"
            className="btn-check"
            id={name}
            autoComplete="off"
          />
          <label
            className="btn btn-sm btn-outline-primary w-100"
            htmlFor={name}
          >
            Приступить!
          </label>
        </div>
      </div>
    </div>
  );
};

export default TodayTaskBlock;
