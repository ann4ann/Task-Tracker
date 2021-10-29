import React from "react";
import { Route, Switch } from "react-router";
// import TasksList from "./components/tasksList";
import NavBar from "./components/navBar";
import Goals from "./layouts/goals";
import Today from "./layouts/today";
import Login from "./layouts/login";
import AllTasks from "./layouts/allTasks";
import AddTask from "./layouts/addTask";

function App() {
  return (
    <div className="d-flex flex-column bg-success  bg-opacity-25 vh-100 p-2">
      <NavBar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/tasks" component={AllTasks} />
        <Route path="/goals" component={Goals} />
        <Route path="/addtask" component={AddTask} />
        <Route path="/" component={Today} />
      </Switch>
    </div>
  );
}

export default App;
