import React, { useState } from "react";
import TextField from "../common/form/textField";
import API from "../../api";
import { useHistory } from "react-router";

const LoginForm = () => {
  const [data, setData] = useState({ login: "", password: "" });
  const [currentUserId, setCurrentUserId] = useState(undefined);
  const history = useHistory();

  const handleChange = ({ target }) => {
    setData((prevstate) => ({ ...prevstate, [target.name]: target.value }));
  };

  let notValidUser = false;
  const handleSubmit = (e) => {
    e.preventDefault();
    API.users.getByLogin(data.login, data.password).then((user) => {
      if (user) {
        notValidUser = false;
        setCurrentUserId(user._id);
        history.push("/");
        localStorage.setItem("currentUserId", currentUserId);
      } else {
        notValidUser = true;
      }
    });
    // if (!currentUserId) return;
  };
  return (
    <div>
      <form action="">
        <TextField
          label="Логин"
          name="login"
          value={data.login}
          onChange={handleChange}
        />
        <TextField
          label="Пароль"
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <button
          className="btn btn-primary btn-lg w-100 mx-1"
          onClick={handleSubmit}
        >
          Войти
        </button>
        {notValidUser && <div>Такого пользователя не существует</div>}
      </form>
    </div>
  );
};

export default LoginForm;
