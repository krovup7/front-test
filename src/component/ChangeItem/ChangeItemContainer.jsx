import React, {useEffect, useState} from "react";
import s from './ChangeItem.module.css'
import {Redirect, withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changeItem} from "../../redux/actions/ItemsAction";
import {dateNow} from "../utils/Date";
import {Formik} from "formik";
import {ChangeItem} from "./ChangeItem";

const ChangeItemContainer = (props) => {
    const [properties, setProperties] = useState({});
    const [photo, setPhoto] = useState('');
    const [title, setTitle] = useState('');
    const [currency, setCurrency] = useState('$');
    const [changed, setChanged] = useState(dateNow);
    const [redirect, setRedirect] = useState(false);
    const dispatch = useDispatch();
    let items = useSelector(state => state.items.items)
    let userId = props.match.params.userId
    let item = items.find(item => item.id == userId)
    let allProp = useSelector(state => state.properties.properties)

    useEffect(() => {
        setProperties(item.property)
        setPhoto(item.photo)
        setCurrency(item.currency)
        setTitle(item.title)

    }, [item.currency, item.photo, item.property, item.title, userId]);
    let avaibleProp = allProp.filter(o => !properties.hasOwnProperty(o.id))

    const deleteProperty = (id) => {
        let newProps = {...properties}
        delete newProps[id]
        setProperties(newProps)
    };
    const addProperty = (e) => {
        let selectedProperty = allProp.find(o => o.id === Number(e))
        let defaultValue = ''
        if (selectedProperty.type === 'Dropdown') {
            defaultValue = []
        } else if (selectedProperty.type === 'Number') {
            defaultValue = 0
        }
        let newProps = {...properties}
        newProps[e] = defaultValue
        setProperties(newProps)

    };
    const setPropertyValue = (e, id) => {
        let newProps = {...properties}
        newProps[id] = e
        setProperties(newProps)
    };
    const setPropertyDropdownValue = (e, id, index) => {
        let newProps = {...properties}
        newProps[id][index] = e
        setProperties(newProps)
    };
    const addDropdown = (id) => {
        let newProps = {...properties}
        newProps[id].push('')
        setProperties(newProps)
    };
    const deleteDropdown = (index, id) => {
        debugger
        let newProps = {...properties}
        delete newProps[id][index]
        setProperties(newProps)
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

    return (redirect ? <Redirect to={'/'}/>
        : <Formik initialValues={{name: item.name, price: item.price}}
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
                          changeItem({
                              id: item.id,
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
               ...props
           }) => <ChangeItem
            {...props}
            handleImageChange={handleImageChange}
            title={title}
            setTitle={setTitle}
            addProperty={addProperty}
            deleteProperty={deleteProperty}
            avaibleProp={avaibleProp}
            properties={properties}
            deleteDropdown={deleteDropdown}
            addDropdown={addDropdown}
            allProp={allProp}
            setPropertyValue={setPropertyValue}
            setPropertyDropdownValue={setPropertyDropdownValue}
            photo={photo}
        />}</Formik>)
}
const WRChangeItem = withRouter(ChangeItemContainer)
export default WRChangeItem