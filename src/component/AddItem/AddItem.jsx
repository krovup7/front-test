import React, {useState} from "react";
import s from './AddItem.module.css'
import {Icon} from '@iconify/react';
import uploadIcon from '@iconify/icons-fa-solid/upload';
import minusCircleOutlined from '@iconify/icons-ant-design/minus-circle-outlined';
import plusCircleOutlined from '@iconify/icons-ant-design/plus-circle-outlined';
import {NavLink, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../../redux/actions/ItemsAction";
import {dateNow} from "../utils/Date";
import Form from "./Form";


export default () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [photo, setPhoto] = useState('');
    const [title, setTitle] = useState('');
    const [currency, setCurrency] = useState('$');
    const [changed, setChanged] = useState(dateNow);
    const [redirect, setRedirect] = useState(false);
    const [color, setColor] = useState([]);
    const [color1, setColor1] = useState('');
    const [color2, setColor2] = useState('');
    const [year, setYear] = useState(null);
    const [fuel, setFuel] = useState("");
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    let items = useSelector(state => state.items.items)
    let auth = useSelector(state => state.items.auth)
    let item=items[items.length - 1]


    const handleImageChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            setPhoto(reader.result)
        }
        reader.readAsDataURL(file)
    };
    const handleSubmit = (e) => {
        color.push(color1, color2)
        e.preventDefault();
        setRedirect(true)
        dispatch(
            addItem({
                id: item.id+1,
                name,
                price:Number(price),
                photo,
                title,
                currency,
                changed,
                property: {
                    color: color,
                    year,
                    fuel
                }


            })
        );
    };

    return (redirect ? <Redirect to={'/'}/>
        : <div className={s.AddContent}>
            <div className={s.AddMain}>
                <div className={s.bntBlock}>
                    <div>
                        <NavLink to={'/'} className={s.bnt1}>Вернуться</NavLink>
                    </div>
                    <div>
                        <NavLink to={'/'} className={s.bnt2} onClick={handleSubmit}>Сохранить</NavLink>
                    </div>
                </div>
                <form>
                    <div className={s.prodDetale}>
                        <h4>Добавление товара</h4>
                        <p>Название товара<span style={{color: "red"}}>*</span></p>
                        <input type={'text'} onChange={(e) => setName(e.target.value)}/>
                        <p>Стоимость товара<span style={{color: "red"}}>*</span></p>
                        <input type={'number'} onChange={(e) => setPrice(e.target.value)}/>
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
                    Добавление товару свойств <span><Icon icon={plusCircleOutlined} width='30' color="blue"/></span>
                </h4></span>
                        <div className={s.prop}>
                            <div className={s.propNum}>
                                <p><span><Icon icon={minusCircleOutlined} color="blue" width='30'/></span> Свойство 1
                                </p>
                                <input type={'text'} value={'Цвет авто'}/>
                            </div>
                            <div className={s.propVal}>
                                <p>Значение</p>
                                <input type={'text'} onChange={(e) => setColor1(e.target.value)}/>
                                <input type={'text'} onChange={(e) => setColor2(e.target.value)}/>{[...Array(count)].map(() => <Form />)} <span><Icon
                                icon={minusCircleOutlined} width='30' color="blue"/></span><br/>
                                <span ><Icon icon={plusCircleOutlined} width='30' color="blue" onClick={() =>setCount(count+1)} /></span>
                            </div>

                        </div>
                        <div className={s.prop}>
                            <div className={s.propNum}>
                                <p><span><Icon icon={minusCircleOutlined} width='30' color="blue"/></span> Свойство 2
                                </p>
                                <input type={'text'} value={'Год выпуска'}/>
                            </div>
                            <div className={s.propVal}>
                                <p>Значение</p>
                                <input type={'number'} onChange={(e) => setYear(e.target.value)}/>
                            </div>

                        </div>
                        <div className={s.prop}>
                            <div className={s.propNum}>
                                <p><span><Icon icon={minusCircleOutlined} width='30' color="blue"/></span> Свойство 3
                                </p>
                                <input type={'text'} value={'Тип топлива'}/>
                            </div>
                            <div className={s.propVal}>
                                <p>Значение</p>
                                <input type={'text'} onChange={(e) => setFuel(e.target.value)}/>
                            </div>

                        </div>

                    </div>
                </form>
            </div>
        </div>)
}
