import React from "react";
import s from "./AddItem.module.css";
import {Form} from "formik";
import {NavLink} from "react-router-dom";
import {Icon} from "@iconify/react";
import uploadIcon from "@iconify/icons-fa-solid/upload";
import plusCircleOutlined from "@iconify/icons-ant-design/plus-circle-outlined";
import FormProperty from "./FormProperty";

export default (props) => {
    return (
        <div className={s.AddContent}>
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
                    <div className={s.productProperties}>
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
                        <textarea onChange={(e) => props.setTitle(e.target.value)}/>
                    </div>
                    <div className={s.propert}>
               <span><h4>
                    Добавление товару свойств <span><Icon icon={plusCircleOutlined} width='30'
                                                          color="blue"/></span><span><select
                   size="1" onChange={event => props.addProperty(event.target.value)}>
                                           <option value="0">Выберите свойство</option>

                   {props.avaibleProp.map((p, index) =>
                       <option key={index} value={p.id}>{p.name}</option>
                   )}
                </select></span>
                </h4></span>
                        {props.choosesProp.map((pro, index) => <FormProperty key={pro.id}
                                                                       type={pro.type} name={pro.name}
                                                                       valueProperty={props.setPropertyValue} index={index}
                                                                       id={pro.id}
                                                                       setPropertyDropdownValue={props.setPropertyDropdownValue}
                                                                       deleteProperty={props.deleteProperty}
                                                                       color={props.color}
                                                                       addDropdown={props.addDropdown}
                                                                       deleteDropdown={props.deleteDropdown}
                                                                       count={props.count}
                        />)}

                    </div>
                </Form>
            </div>
        </div>
    )
}