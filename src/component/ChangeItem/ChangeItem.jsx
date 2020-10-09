import React from "react";
import s from './ChangeItem.module.css'
import {Icon} from '@iconify/react';
import uploadIcon from '@iconify/icons-fa-solid/upload';
import plusCircleOutlined from '@iconify/icons-ant-design/plus-circle-outlined';
import {NavLink} from "react-router-dom";
import {Form} from "formik";
import {FormChangeProperty} from "./FormChangeProperty";

export const ChangeItem = (props) => {
    return (<div className={s.AddContent}>
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
                <div>
                    <h4>Добавление товара</h4>
                    <p>Название товара<span style={{color: "red"}}>*</span></p>
                    <input
                        type="name"
                        name="name"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.name}
                    />
                    {props.errors.name && props.touched.name && props.errors.name}
                    <p>Стоимость товара<span
                        style={{color: "red"}}>*</span></p>
                    <input
                        type="number"
                        name="price"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.price}
                    />
                    {props.errors.price && props.touched.price && props.errors.price}
                    <p>Изображение<span style={{color: "red"}}>*</span></p>
                    <div className={s.uploadFile}><label>
                        <input type="file" onChange={props.handleImageChange}/>
                        <p>image <span><Icon icon={uploadIcon} color="blue" width="20"/></span></p>

                    </label></div>
                    <p>Описание</p>
                    <textarea value={props.title} onChange={(e) => props.setTitle(e.target.value)}/>
                </div>
                <div className={s.property}>
               <span><h4>
                    Добавление товару свойств <span><Icon icon={plusCircleOutlined} width='30'
                                                          color="blue"/></span><span><select
                   size="1" onChange={event => props.addProperty(event.target.value)}>
                                           <option value="0">Выберите свойство</option>

                   {props.avaibleProp.map((p, index) =>
                       <option key={index} value={p.id}>{p.name}</option>
                   )}
                </select></span>
                </h4></span>{Object.keys(props.properties).map((key) => <FormChangeProperty key={key}
                                                                                            deleteDropdown={props.deleteDropdown}
                                                                                            addDropdown={props.addDropdown}
                                                                                            value={props.properties[key]}
                                                                                            type={props.allProp.find(p => p.id === Number(key)).type}
                                                                                            name={props.allProp.find(p => p.id === Number(key)).name}
                                                                                            setPropertyValue={props.setPropertyValue}
                                                                                            id={key}
                                                                                            setPropertyDropdownValue={props.setPropertyDropdownValue}
                                                                                            deleteProperty={props.deleteProperty}/>
                )}


                </div>
            </Form>
        </div>
    </div>)
}
