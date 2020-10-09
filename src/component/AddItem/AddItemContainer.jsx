import React, {useState} from "react";
import s from './AddItem.module.css'
import { Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../../redux/actions/ItemsAction";
import {dateNow} from "../utils/Date";
import {Formik} from "formik";
import {AddItem} from "./AddItem";

export const AddItemContainer = () => {
    const [choosesProp, setChoosesProp] = useState([{
        id: 1,
        name: 'Цвет авто',
        type: 'Dropdown'
    }, {
        id: 2,
        name: 'Год выпуска',
        type: 'Number'
    }, {
        id: 3,
        name: 'Тип топлива',
        type: 'String'
    },]);
    const [color, setColor] = useState([]);
    const [properties, setProperties] = useState({});
    const [photo, setPhoto] = useState('');
    const [title, setTitle] = useState('');
    const [currency, setCurrency] = useState('$');
    const [changed, setChanged] = useState(dateNow);
    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState([1, 2]);
    const dispatch = useDispatch();
    let items = useSelector(state => state.items.items)
    let item = items[items.length - 1]
    let allProp = useSelector(state => state.items.properties)
    let avaibleProp = allProp.filter(o => !choosesProp.find(x => o.id === x.id))

    const deleteProperty = (id) => {
        setChoosesProp(choosesProp.filter(x => x.id !== id))
    };
    const addProperty = (e) => {
        let p = allProp.find(x => x.id === Number(e))
        setChoosesProp([...choosesProp, p])
    };
    const setPropertyValue = (e, id) => {
        properties[id] = e
        setProperties(properties)
    };
    const setPropertyDropdownValue = (e, id, index) => {
        color[index] = e
        properties[id] = color
        setProperties(properties)
    };
    const handleImageChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            setPhoto(reader.result)
        }
        reader.readAsDataURL(file)
    };
    const addDropdown = () => {
        setCount([...count, 1])
    };
    const deleteDropdown = () => {
        setCount(count.slice(0, -1))
    }

    return (redirect ? <Redirect to={'/'}/>
        : <Formik initialValues={{name: '', price: ''}}
                  validate={values => {
                      const errors = {};
                      if (!values.name) {
                          errors.name = <span className={s.required}>{'Required'}</span>;
                      }
                      if (!values.price) {
                          errors.price = <span className={s.required}>{'Required'}</span>;
                      }
                      return errors;
                  }}
                  onSubmit={async (values) => {
                      setRedirect(true)
                      dispatch(
                          addItem({
                              id: item.id + 1,
                              name: values.name,
                              price: Number(values.price),
                              photo,
                              title,
                              currency,
                              changed,
                              property: properties
                          })
                      );
                  }}
        >{({
               values,
               errors,
               touched,
               handleChange,
               handleBlur,
           }) => <AddItem
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            errors={errors}
            values={values}
            setTitle={setTitle}
            addProperty={addProperty}
            avaibleProp={avaibleProp}
            choosesProp={choosesProp}
            setPropertyValue={setPropertyValue}
            setPropertyDropdownValue={setPropertyDropdownValue}
            deleteProperty={deleteProperty}
            color={color}
            addDropdown={addDropdown}
            deleteDropdown={deleteDropdown}
            handleImageChange={handleImageChange}
            count={count}
        />}</Formik>)
}
