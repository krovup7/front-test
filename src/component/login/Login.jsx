import React from "react";
import * as LoginService from "./LoginService";
import * as EmailInput from "./EmailInput";
import * as PasswordInput from "./PasswordInput";
import { ErrorMessage, Field, Form, Formik } from "formik";
import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
  margin-bottom: 3rem !important;
  margin-top: 3rem !important;
  background-color: #f8f8fa;
`;
const Main = styled.div`
  width: 60%;
  margin: 0 auto;
  label {
    display: inline-block;
    font-weight: 600;
    margin-bottom: 0.5rem;
    line-height: 1.5;
    color: #5b626b;
    text-align: left;
    font-family: Roboto, sans-serif;
    font-size: 0.875rem;
    margin-left: 10px;
  }
`;
const LoginForm = styled.div`
  @media (max-width: 770px) and (min-width: 600px) {
    width: 400px;
  }
  @media (max-width: 600px) and (min-width: 500px) {
    width: 350px;
  }
  @media (max-width: 500px) and (min-width: 400px) {
    width: 320px;
  }
  @media (max-width: 400px) and (min-width: 300px) {
    width: 280px;
  }
  position: relative;
  width: 513px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px 8px 8px 8px;
`;
const FormMain = styled.div`
  padding: 15px 15px 15px 15px;
  h2 {
    margin-bottom: 3rem;
    color: #5b626b;
    font-family: Roboto, sans-serif;
  }
`;
const Button = styled.div`
  button {
    font-weight: 400;
    cursor: pointer;
    min-width: 150px;
    color: #fff;
    background-color: #ffb800;
    vertical-align: middle;
    text-align: center;
    border: 1px solid #ffb800;
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    margin-top: 3rem;
  }
`;
export const Login = ({ onSubmit }) => {
  return (
    <Formik {...LoginService.formikProps} onSubmit={onSubmit}>
      {({ errors, touched, ...props }) => (
        <Content>
          <Main>
            <LoginForm>
              <FormMain>
                <h2>Вход</h2>
                <Form>
                  <Field
                    name={LoginService.FIELDS.EMAIL}
                    as={EmailInput.TextInput}
                    {...props}
                  />
                  <ErrorMessage name={LoginService.FIELDS.EMAIL}>
                    {(msg) => <LoginService.Error msg={msg} />}
                  </ErrorMessage>
                  <Field
                    name={LoginService.FIELDS.PASSWORD}
                    as={PasswordInput.PasswordInput}
                    {...props}
                  />
                  <ErrorMessage name={LoginService.FIELDS.PASSWORD}>
                    {(msg) => <LoginService.Error msg={msg} />}
                  </ErrorMessage>
                  <Button>
                    <button type="submit">Войти</button>
                  </Button>
                </Form>
              </FormMain>
            </LoginForm>
          </Main>
        </Content>
      )}
    </Formik>
  );
};
