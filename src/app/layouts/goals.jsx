import React, { useEffect, useState } from "react";
import GoalBlock from "../components/goalBlock";
import API from "../api";

const Goals = () => {
  const [goals, setGoals] = useState();
  useEffect(() => {
    API.goals.fetchAll().then((data) => {
      setGoals(
        data.filter((goal) => {
          if (!goal.status) {
            return goal;
          }
        })
      );
      console.log("data:", data);
    });
  }, []);
  useEffect(() => {
    console.log(goals);
  }, [goals]);

  const handleClick = (id) => {
    const newGoals = goals.filter((goal) => {
      if (goal.id === id) {
        goal.status = true;
      } else {
        return goal;
      }
    });
    setGoals(newGoals);
  };

  return (
    <div className="container shadow">
      <div className="row mx-md-5 mt-3 justify-content-center">
        {goals &&
          goals.map((goal) => (
            <div
              key={goal.id}
              className={
                goal.isMainGoal
                  ? "col-12 mb-3 order-first"
                  : "col-sm-6 col-12 mb-3"
              }
            >
              <GoalBlock goal={goal} onClick={handleClick} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Goals;
