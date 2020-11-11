import React from "react";
import * as Yup from "yup";
import styled from "styled-components";

export const FIELDS = {
  EMAIL: "email",
  PASSWORD: "password",
};

export const INITIAL_VALUES = {
  [FIELDS.EMAIL]: "test@mail.ru",
  [FIELDS.PASSWORD]: "123",
};

export const onSubmit = (values) => {
  onSubmit(values);
};

export const handleChange = (value) => {
  console.log("value", value);
};

export const SignupSchema = Yup.object().shape({
  [FIELDS.EMAIL]: Yup.string()
    .email("Invalid email")
    .required("Email is required."),
  [FIELDS.PASSWORD]: Yup.string().required("Password is required"),
});

export const formikProps = {
  initialValues: INITIAL_VALUES,
  onSubmit: onSubmit,
  validationSchema: SignupSchema,
  validateOnChange: true,
};
const Required = styled.p`
  color: red;
`;
export const Error = ({ msg }) => {
  return (
    <div>
      <Required>{msg}</Required>
    </div>
  );
};
