import React from "react";
import s from "./AllProperty.module.css";
import {NavLink} from "react-router-dom";

export const Property = (props) => {
    return (
        <tr key={props.id}>
            <td>{props.name}</td>
            <td>{props.type}</td>
            <td className={s.delete}><NavLink to={'/AllProperty'}
                                              onClick={() => props.deleteProperty(props.id)}>Удалить</NavLink>
            </td>
        </tr>
    )
}