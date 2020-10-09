import React from "react";
import s from './ItemCard.module.css'
import {NavLink} from "react-router-dom";
import ItemInput from "./ItemInput";

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
                {props.listProperty.map((p,index) => <ItemInput key={index} name={p.name} value={p.value} type={p.type}/>)}
                <h4>Стоимость</h4>
                <div className={s.buy}><p>{props.item.price.toLocaleString('ru')}{props.item.currency}</p>
                    <button>Беру!!!</button>
                </div>
            </div>
        </div>
    </div>)
}
export default ItemCard
