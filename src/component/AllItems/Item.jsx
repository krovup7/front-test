import React from "react";
import {NavLink} from "react-router-dom";
import s from "./AllItems.module.css";

export const Item = (props) => {
    return(
        <tr>
            <td><NavLink to={'/ItemCard/' + props.id}>{props.name}</NavLink></td>
            <td>{props.price.toLocaleString('ru')}{props.currency}</td>
            <td>{props.changed}</td>
            <td className={s.edit}><NavLink to={'/ChangeItem/' + props.id}>Ред.</NavLink> <NavLink to={'/Items'}
                                                                                                  onClick={() => props.deleteProduct(props.id)}>Удалить</NavLink>
            </td>
        </tr>
    )
}