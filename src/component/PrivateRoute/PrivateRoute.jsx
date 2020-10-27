import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useSelector} from "react-redux";

export const PrivateRoute = ({component: Component, ...rest}) => {
    let auth = useSelector(state => state.auth.auth)

    return (
        <Route {...rest} render={props => (
            auth ?
                <Component {...props} />
                : <Redirect to="/Login" />
        )} />
    );
};

