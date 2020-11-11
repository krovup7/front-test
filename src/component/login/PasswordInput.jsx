import React from "react";
import styled from "styled-components";

const Password = styled.div`
  margin-bottom: 1rem;
  text-align: left;
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
  input {
    display: block;
    text-align: start;
    width: 90%;
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    font-family: Roboto, sans-serif;
    margin: auto;
  }
`;
export const PasswordInput = ({ handleChange, handleBlur, values, name }) => {
  return (
    <Password>
      <label htmlFor="password">Пароль</label>
      <input
        type="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
        name={name}
      />
    </Password>
  );
};
