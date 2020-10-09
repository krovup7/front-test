import React, {useState} from "react";
import s from './AddProperty.module.css'
import {Redirect} from "react-router-dom";
import {addProperty, showAlert} from "../../redux/actions/ItemsAction";
import {useDispatch, useSelector} from "react-redux";
import {Formik} from "formik";
import {AddProperty} from "./AddProperty";

export const AddPropertyContainer = () => {
    const [redirect, setRedirect] = useState(false);
    const dispatch = useDispatch();
    let properties = useSelector(state => state.items.properties)
    let propertiesNames = useSelector(state => state.items.propertiesNames)
    let property = properties[properties.length - 1]
    return (redirect ? <Redirect to={'/AllProperty'}/>
        : <Formik initialValues = {{name: '', type: ''}}
                  validate = {values => {
                      const errors = {};
                      if (!values.name) {
                          errors.name = <span className={s.required}>{'Required'}</span>;
                      }
                      if (!values.type) {
                          errors.type = <span className={s.required}>{'Required'}</span>;
                      }
                      return errors;
                  }}
                  onSubmit = {async (values) => {
                      const found = propertiesNames.filter(w => values.name.includes(w))
                      if (found.length) {
                          dispatch(showAlert('Такое свойство существует'))
                      } else {
                          setRedirect(true)
                          dispatch(
                              addProperty({
                                  id: property.id + 1,
                                  name: values.name,
                                  type: values.type,
                              })
                          );
                      }
                  }}
        >{({
               values,
               errors,
               touched,
               handleChange,
               handleBlur,
           }) => <AddProperty handleChange={handleChange} handleBlur={handleBlur} values={values} errors={errors}
                              touched={touched}/>}
        </Formik>)
}
