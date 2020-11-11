import React from "react";
import { showAlert } from "../redux/actions/ItemsAction";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { AddProperty } from "../component/AddProperty/AddProperty";
import { addProperty } from "../redux/actions/PropertiesAction";
import { RequiredField } from "../styles/Styles";

export const AddPropertyContainer = (props) => {
  const dispatch = useDispatch();
  let properties = useSelector((state) => state.properties.properties);
  let propertiesNames = useSelector(
    (state) => state.properties.propertiesNames
  );
  let property = properties[properties.length - 1];
  const routeChange = () => {
    let path = "/AllProperty";
    props.history.push(path);
  };
  return (
    <Formik
      initialValues={{ name: "", type: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = <RequiredField>{"Required"}</RequiredField>;
        }
        if (!values.type) {
          errors.type = <RequiredField>{"Required"}</RequiredField>;
        }
        return errors;
      }}
      onSubmit={async (values) => {
        const found = propertiesNames.filter((w) => values.name.includes(w));
        if (found.length) {
          dispatch(showAlert("Такое свойство существует"));
        } else {
          dispatch(
            addProperty({
              id: property.id + 1,
              name: values.name,
              type: values.type,
            })
          );
          props.history.push("/AllProperty");
        }
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <AddProperty
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          errors={errors}
          touched={touched}
          routeChange={routeChange}
        />
      )}
    </Formik>
  );
};
