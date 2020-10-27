import React from "react";
import s from './AllProperty.module.css'
import {NavLink} from "react-router-dom";
import {Property} from "./Property";

export const AllProperty = (props) => {

    return (<div className={s.AllContent}>
        <div className={s.header}>
            <ul>
                <li>
                    <div className={s.product}><NavLink to={'/Items'}>Листинг товаров</NavLink></div>
                </li>
                <li>
                    <div className={s.properties}><NavLink to={'/AllProperty'}>Листинг проперти</NavLink></div>
                </li>
            </ul>
        </div>
        <div className={s.AllMain}>
            <div>
                <NavLink to={'/AddProperty'} className={s.addProperty}>Добавить проперти</NavLink>
            </div>
            <div>
                <table className={s.table} cellSpacing="0">
                    <tbody>
                    <tr>
                        <th>Перечень проперти</th>
                        <th className={s.colorName}>Тип</th>
                        <th className={s.colorName}>Управление</th>
                    </tr>
                    {props.properties.map((pro) =>
                        <Property key={pro.id} name={pro.name} type={pro.type} id={pro.id} deleteProperty={props.deleteProperty}/>
                    )}
                    </tbody>

                </table>
            </div>
        </div>
    </div>)
}
