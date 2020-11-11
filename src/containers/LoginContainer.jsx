import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Login } from "../component/login/Login";
import { login } from "../redux/actions/AuthAction";

export const LoginContainer = () => {
  let auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();
  if (auth) {
    return <Redirect to={"/Items"} />;
  }
  const onSubmit = (values) => {
    if (values.email === "test@mail.ru" && values.password === "123") {
      dispatch(login());
    } else {
      alert("Неверный логин или пароль");
    }
  };
  return <Login onSubmit={onSubmit} />;
};
