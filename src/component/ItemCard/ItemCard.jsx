import React from "react";
import s from './ItemCard.module.css'
import {NavLink} from "react-router-dom";

const ItemCard = (props) => {
    return (<div className={s.ItemContent}>
        <div className={s.ItemMain}>
            <NavLink to={'/'}>Вернуться</NavLink>
            <hr/>
            <div className={s.Columns}>
                <div className={s.ItemImg}><img
                    src={props.item.photo}/>
                </div>
                <div className={s.ItemTxt}>
                    <h3>{props.item.name}</h3>
                    <p> {props.item.title}</p>
                </div>
            </div>
            <div className={s.ItemSpecific}>
                <h4>Цвет авто</h4>
                <select size="1">
                    {props.item.property.color.map((v, index) =>
                        <option key={index} value="0">{v}</option>
                    )}
                </select>
                <h4>Год выпуска</h4>
                <p>{props.item.property.year}</p>
                <h4>Тип топлива</h4>
                <p>{props.item.property.fuel}</p>
                <h4>Стоимость</h4>
                <div className={s.buy}><p>{props.item.price.toLocaleString('ru')}{props.item.currency}</p>
                    <button>Беру!!!</button>
                </div>
            </div>
        </div>
    </div>)
}
export default ItemCard
