import React from "react";
import { Field, Form } from "formik";
import {
  Content,
  Main,
  Button,
  Input,
  RequiredField,
} from "../../styles/Styles";

export const AddProperty = ({
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  routeChange,
}) => {
  return (
    <Content>
      <Main>
        <Form>
          <Button type="submit" primary>
            Сохранить
          </Button>
          <Button onClick={routeChange}>Вернуться</Button>
          <div>
            <h4>Добавление свойства</h4>
            <p>
              Название свойства<RequiredField>*</RequiredField>
            </p>
            <Input
              type="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && errors.name}
          </div>
          <p>
            Укажите тип свойства<RequiredField>*</RequiredField>
          </p>
          <div>
            <label>
              <Field type="radio" name="type" value="Dropdown" />
              Dropdown
            </label>
          </div>
          <div>
            <label>
              <Field type="radio" name="type" value="Number" />
              Number
            </label>
          </div>
          <div>
            <label>
              <Field type="radio" name="type" value="String" />
              String
            </label>
          </div>
          {errors.type && touched.type && errors.type}
        </Form>
      </Main>
    </Content>
  );
};
