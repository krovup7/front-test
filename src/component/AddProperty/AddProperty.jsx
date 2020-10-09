import React from "react";
import s from './AddProperty.module.css'
import {NavLink} from "react-router-dom";
import {Field, Form, } from "formik";

export const AddProperty = (props) => {
    return (<div className = {s.AddContent}>
        <div className = {s.AddMain}>
            <Form>
                <div className={s.navBlock}>
                    <div>
                        <NavLink to = {'/AllProperty'} className={s.back}>Вернуться</NavLink>
                    </div>
                    <div>
                        <button type="submit">Сохранить</button>
                    </div>
                </div>
                <div className={s.propertyName}>
                    <h4>Добавление свойства</h4>
                    <p>Название свойства<span className={s.requiredField}>*</span></p>
                    <input
                        type="name"
                        name="name"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.name}
                    />
                    {props.errors.name && props.touched.name && props.errors.name}
                </div>
                <p>Укажите тип свойства<span className={s.requiredField}>*</span></p>
                <div>
                    <label>
                        <Field type="radio" name="type" value="Dropdown"/>
                        Dropdown
                    </label>
                </div>
                <div>
                    <label>
                        <Field type="radio" name="type" value="Number"/>
                        Number
                    </label>
                </div>
                <div>
                    <label>
                        <Field type="radio" name="type" value="String"/>
                        String
                    </label>
                </div>
                {props.errors.type && props.touched.type && props.errors.type}
            </Form>
        </div>
    </div>)

}
