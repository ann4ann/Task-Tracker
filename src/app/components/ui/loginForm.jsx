import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "../common/form/textField";

const LoginForm = () => {
  const [data, setData] = useState({ login: "", password: "" });
  const handleChange = ({ target }) => {
    setData((prevstate) => ({ ...prevstate, [target.name]: target.value }));
    console.log(data);
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
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <Link
          className="btn btn-primary btn-lg w-100 mx-1"
          role="button"
          //   onClick={handleSubmit}
          to="/"
        >
          Войти
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
