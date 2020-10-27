import React from 'react';
import * as Yup from 'yup';
import s from './Login.module.css'



export const FIELDS = {
    EMAIL: "email",
    PASSWORD: "password"
};

export const INITIAL_VALUES = {
    [FIELDS.EMAIL]: 'test@mail.ru',
    [FIELDS.PASSWORD]: '123'
};

export const onSubmit=(values) => {
    onSubmit(values)
}

export const handleChange = (value) => {

    console.log('value', value);
};

export const SignupSchema = Yup.object().shape({
    [FIELDS.EMAIL]: Yup.string().email('Invalid email').required('Email is required.'),
    [FIELDS.PASSWORD]: Yup.string().required('Password is required')
});

export const formikProps = {
    initialValues: INITIAL_VALUES,
    onSubmit: onSubmit,
    validationSchema: SignupSchema,
    validateOnChange: true,

};


export const TextInput = ({handleChange, handleBlur, values, name}) => (
    <div className={s.FormLogin}>
        <label htmlFor="email">Email</label>
        <input
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[name]}
            name={name}
        />
    </div>
);

export const PasswordInput = ({handleChange, handleBlur, values, name}) => (
    <div className={s.FormPassword}>
        <label htmlFor="password">Пароль</label>
        <input
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[name]}
            name={name}
        />
    </div>
        );

        export const Error = ({msg}) => (
        <div>
            <p className={s.required}>{msg}</p>
        </div>
        );