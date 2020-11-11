import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  // let auth = useSelector((state) => state.auth.auth);
  let auth = true; //Неправильное временное решение, чтоб было удобно проверить работу
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> : <Redirect to="/Login" />
      }
    />
  );
};
