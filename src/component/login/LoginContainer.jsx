import React, {useEffect, useState} from "react";
import {login} from "../../redux/actions/ItemsAction";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {Formik} from 'formik';
import Login from "./Login";


const LoginContainer = () => {
    let auth = useSelector(state => state.items.auth)
    const dispatch = useDispatch();

if (auth){
    return <Redirect to={'/'}/>
}
    return auth ? <Redirect to={'/'}/> : <Formik
        initialValues={{email: 'test@mail.ru', password: '123'}}
        validate={values => {
            const errors = {};
            if (!values.password) {
                errors.password = <span style={{color: 'red'}}>{'Required'}</span>;
            }
            if (!values.email) {
                errors.email = <span style={{color: 'red'}}>{'Required'}</span>;
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = <span style={{color: 'red'}}>{'Invalid email address'}</span>;
            }

            return errors;
        }}
onSubmit={(values, {setSubmitting}) => {
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
      /* and other goodies */
  }) => (<Login handleSubmit={handleSubmit} handleChange={handleChange} handleBlur={handleBlur} values={values}
                errors={errors} touched={touched} isSubmitting={isSubmitting}/>)}


</Formik>
}
export default LoginContainer
