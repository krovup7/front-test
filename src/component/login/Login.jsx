import React from "react";
import s from './Login.module.css'

export const Login = (props) => {
    return <div className={s.LoginContent}>
                <div className={s.LoginMain}>
                    <div className={s.LoginForm}>
                        <div className={s.LoginFormMain}>
                            <h2>Вход</h2>
                            <form onSubmit={props.handleSubmit}>
                                <div className={s.FormLogin}>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.email}
                                    />
                                    {props.errors.email && props.touched.email && props.errors.email}
                                </div>

                                <div className={s.FormPassword}>
                                    <label>Пароль</label>
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.password}
                                    />
                                    {props.errors.password && props.touched.password && props.errors.password}
                                </div>
                                <div className={s.Formbutton}>
                                    <button type="submit" >Войти</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

}

