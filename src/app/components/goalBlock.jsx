import React from "react";
import PropTypes from "prop-types";

const GoalBlock = ({ goal, onClick }) => {
  return (
    <div className="card border-dark bg-transparent">
      <h5 className="card-header">
        <div className="row">
          <div className="col">{goal.name}</div>
          <div className="col-auto">
            <div className="form-check form-switch">
              <label className="form-check-label" htmlFor={goal.id}>
                Done
              </label>
              <input
                onClick={() => onClick(goal.id)}
                className="form-check-input"
                type="checkbox"
                // defaultChecked={status}
                id={goal.id}
              />
            </div>
          </div>
        </div>
      </h5>
      <div className="card-body">
        <h5 className="card-title">{goal.description}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Если достигну:</h6>
        <p className="card-text">{goal.ifArchieve}</p>
        <h6 className="card-subtitle mb-2 text-muted">Если не достигну:</h6>
        <p className="card-text">{goal.ifNotArchieve}</p>
      </div>
    </div>
  );
};

GoalBlock.propTypes = {
  goal: PropTypes.object,
  onClick: PropTypes.func,
};

export default GoalBlock;
