import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul class="nav nav-pills nav-fill" style={{ height: "5vh" }}>
      <li class="nav-item">
        <Link class="nav-link" aria-current="page" to="/tasks">
          AllTasks
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/">
          TODAY
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/goals">
          Goal(s)
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/login">
          Login
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
