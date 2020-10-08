import React, {useEffect, useState} from "react";
import s from './ChangeItem.module.css'
import {Icon} from '@iconify/react';
import uploadIcon from '@iconify/icons-fa-solid/upload';
import plusCircleOutlined from '@iconify/icons-ant-design/plus-circle-outlined';
import {NavLink, Redirect, withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addItem, addProperty, showAlert} from "../../redux/actions/ItemsAction";
import {dateNow} from "../utils/Date";
import {Formik, Form} from "formik";
import FormChangeProperty from "./FormChangeProperty";


const ChangeItemContainer = (props) => {
    const [properties, setProperties] = useState({});
    const [photo, setPhoto] = useState('');
    const [title, setTitle] = useState('');
    const [currency, setCurrency] = useState('$');
    const [changed, setChanged] = useState(dateNow);
    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    let items = useSelector(state => state.items.items)
    let userId = props.match.params.userId
    let item = items.find(item => item.id == userId)
    let allProp = useSelector(state => state.items.properties)


    useEffect(() => {
        setProperties(item.property)
        setPhoto(item.photo)
        setCurrency(item.currency)
        setTitle(item.title)

    }, [userId]);


    let avaibleProp = allProp.filter(o => !properties.hasOwnProperty(o.id))

    const deleteProperty = (id) => {
        delete properties[id]
    };
    const addProperty = (e, id) => {
        let selectedProperty = allProp.find(o=> o.id===Number(id))
        let defaultValue = ''
        if(selectedProperty.type === 'Dropdown'){
            defaultValue = []
        }else if(selectedProperty.type === 'Number'){
            defaultValue = 0
        }
        properties[id] = defaultValue

    };
    const setPropertyValue = (e, id) => {
        properties[id] = e
        setProperties(properties)

    };
    const setPropertyDropdownValue = (e, id, index) => {
        properties[id][index]=e
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
           }) => <div className={s.AddContent}>
            <div className={s.AddMain}>
                <Form>

                    <div className={s.navBlock}>
                        <div>
                            <NavLink to={'/'} className={s.back}>Вернуться</NavLink>
                        </div>
                        <div>
                            <button type="submit">Сохранить</button>
                        </div>
                    </div>

                    <div className={s.prodDetale}>
                        <h4>Добавление товара</h4>
                        <p>Название товара<span style={{color: "red"}}>*</span></p>
                        <input
                            type="name"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        {errors.name && touched.name && errors.name}
                        <p>Стоимость товара<span
                            style={{color: "red"}}>*</span></p>
                        <input
                            type="number"
                            name="price"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.price}
                        />
                        {errors.price && touched.price && errors.price}
                        <p>Изображение<span style={{color: "red"}}>*</span></p>
                        <div className={s.uploadFile}><label>
                            <input type="file" onChange={handleImageChange}/>
                            <p>image <span><Icon icon={uploadIcon} color="blue" width="20"/></span></p>

                        </label></div>
                        <p>Описание</p>
                        <textarea value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className={s.propert}>
               <span><h4>
                    Добавление товару свойств <span><Icon icon={plusCircleOutlined} width='30' color="blue"
                                                          onClick={() => setCount(count + 1)}/></span><span><select
                   size="1" onChange={event => addProperty(event.target.value)}>
                                           <option value="0">Выберите свойство</option>

                   {avaibleProp.map((p, index) =>
                       <option key={index} value={p.id}>{p.name}</option>
                   )}
                </select></span>
                </h4></span>{Object.keys(properties).map((key) => <FormChangeProperty key={key}
                                                                                      value={properties[key]}
                                                                                      type={allProp.find(p => p.id === Number(key)).type}
                                                                                      name={allProp.find(p => p.id === Number(key)).name}
                                                                                      setPropertyValue={setPropertyValue}
                                                                                      id={key}
                                                                                      setPropertyDropdownValue={setPropertyDropdownValue}
                                                                                      deleteProperty={deleteProperty}/>
                    )}


                    </div>
                </Form>
            </div>
        </div>}</Formik>)
}
const WRChangeItem = withRouter(ChangeItemContainer)
export default WRChangeItem