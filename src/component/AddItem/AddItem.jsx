import React, {useState} from "react";
import s from './AddItem.module.css'
import {Icon} from '@iconify/react';
import uploadIcon from '@iconify/icons-fa-solid/upload';
import minusCircleOutlined from '@iconify/icons-ant-design/minus-circle-outlined';
import plusCircleOutlined from '@iconify/icons-ant-design/plus-circle-outlined';
import {NavLink, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addItem, addProperty, showAlert} from "../../redux/actions/ItemsAction";
import {dateNow} from "../utils/Date";
import {Formik,Form} from "formik";
import FormProperty from "./FormProperty";


export default () => {
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
    const [arr, setArr] = useState(['']);
    const [properties, setProperties] = useState({});
    const [photo, setPhoto] = useState('');
    const [title, setTitle] = useState('');
    const [currency, setCurrency] = useState('$');
    const [changed, setChanged] = useState(dateNow);
    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    let items = useSelector(state => state.items.items)
    let item = items[items.length - 1]
    let allProp = useSelector(state => state.items.properties)


    let avaibleProp = allProp.filter(o => !choosesProp.find(x => o.id === x.id))

    const deleteProperty = (id) => {
        setChoosesProp(choosesProp.filter(x => x.id !== id))
    };
    const addProperty = (e, id) => {
        let p = allProp.find(x => x.id === Number(e))
        setChoosesProp([...choosesProp, p])
    };
    const setPropertyValue = (e, id) => {
        properties[id] = e
        setProperties(properties)
    };
    const setPropertyDropdownValue = (e, id, index) => {
        arr[index] = e
        properties[id] = arr
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
                              name:values.name,
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
                            <NavLink to = {'/'} className={s.back}>Вернуться</NavLink>
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
                        <textarea onChange={(e) => setTitle(e.target.value)}/>
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
                </h4></span>
                        {choosesProp.map((pro, index) => <FormProperty key={pro.id}
                                                               type={pro.type} name={pro.name}
                                                               valueProperty={setPropertyValue} index={index}
                                                               id={pro.id}
                                                               setPropertyDropdownValue={setPropertyDropdownValue}
                                                               deleteProperty={deleteProperty}/>)}

                    </div>
                </Form>
            </div>
        </div>}</Formik>)
}
