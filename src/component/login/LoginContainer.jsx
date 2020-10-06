import React, {useEffect, useState} from "react";
import s from './Login.module.css'
import {login} from "../../redux/actions/ItemsAction";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {Formik} from 'formik';
import Login from "./Login";

const LoginContainer = () => {
    let auth = useSelector(state => state.items.auth)
    const dispatch = useDispatch();
    if (auth) {
        return <Redirect to={'/'}/>
    }
    return  <Formik
        initialValues={{email: 'test@mail.ru', password: '123'}}
        validate={values => {
            const errors = {};
            if (!values.password) {
                errors.password = <span className={s.required}>{'Required'}</span>;
            }
            if (!values.email) {
                errors.email = <span className={s.required}>{'Required'}</span>;
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = <span className={s.required}>{'Invalid email address'}</span>;
            }
            return errors;
        }}
        onSubmit={(values) => {
            dispatch(
                login({
                    email: values.email,
                    password: values.password,
                })
            );
        }}>
        {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
          }) => (<Login handleSubmit={handleSubmit} handleChange={handleChange} handleBlur={handleBlur} values={values}
                        errors={errors} touched={touched} isSubmitting={isSubmitting}/>)}
    </Formik>
}
export default LoginContainer
