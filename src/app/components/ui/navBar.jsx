import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul
      className="nav nav-pills nav-fill align-items-center"
    >
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/tasks">
          AllTasks
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link fs-4 fw-bold" to="/">
          TODAY
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/goals">
          Goal(s)
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
