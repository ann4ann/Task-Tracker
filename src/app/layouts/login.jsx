import React, { useState } from "react";
import { useParams } from "react-router";
import LoginForm from "../components/ui/loginForm";
import RegisterForm from "../components/ui/registerForm";

const Login = () => {
  const { type } = useParams;
  const [formType, setFormType] = useState(
    type === "register" ? "login" : "register"
  );
  const toggleFormType = () => {
    setFormType((prevState) =>
      prevState === "register" ? "login" : "register"
    );
  };

  return (
    <div className="container mt-5 shadow w-50">
      <div className="p-5">
        {formType === "register" ? (
          <>
            <RegisterForm />
            Уже зарегистрированы?{" "}
            <a role="button" className="btn btn-link" onClick={toggleFormType}>
              Войти
            </a>
          </>
        ) : (
          <>
            <LoginForm />
            Еще не зарегистрированы?{" "}
            <a role="button" className="btn btn-link" onClick={toggleFormType}>
              Зарегистрироваться
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
