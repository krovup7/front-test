import React from "react";
import * as LoginService from "./LoginService";
import s from "./Login.module.css";
import {ErrorMessage, Field, Form, Formik} from "formik";
export const Login=(props)=>{
    return(
        <Formik{...LoginService.formikProps} onSubmit={props.onSubmit}>
            {({errors, touched, ...props}) => (
                <div className={s.LoginContent}>
                    <div className={s.LoginMain}>
                        <div className={s.LoginForm}>
                            <div className={s.LoginFormMain}>
                                <h2>Вход</h2>
                                <Form>
                                    <Field
                                        name={LoginService.FIELDS.EMAIL}
                                        as={LoginService.TextInput}
                                        {...props}
                                    />
                                    <ErrorMessage name={LoginService.FIELDS.EMAIL}>
                                        {msg => <LoginService.Error msg={msg}/>}
                                    </ErrorMessage>
                                    <Field
                                        name={LoginService.FIELDS.PASSWORD}
                                        as={LoginService.PasswordInput}
                                        {...props}
                                    />
                                    <ErrorMessage name={LoginService.FIELDS.PASSWORD}>
                                        {msg => <LoginService.Error msg={msg}/>}
                                    </ErrorMessage>
                                    <div className={s.Formbutton}>
                                        <button type="submit">Войти</button>
                                    </div>
                                </Form>
                            </div>
                        </div>

                    </div>
                </div>)}
        </Formik>
    )
}