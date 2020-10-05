import React from "react";
import s from './AllProperty.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";


export default (props) => {
    const dispatch = useDispatch();

    return (<div className={s.AllContent}>
        <div className={s.header}>

            <ul>
                <li>
                    <div className={s.prod}><NavLink to={'/'}>Листинг товаров</NavLink></div>
                </li>
                <li>
                    <div className={s.prop}><NavLink to={'/AllProperty'}>Листинг проперти</NavLink></div>
                </li>
            </ul>

        </div>
        <div className={s.AllMain}>

            <div>
                <NavLink to={'/AddProperty'} className={s.button}>Добавить проперти</NavLink>
            </div>
            <div>
                <table className={s.table} cellSpacing="0">
                    <tbody>


                    <tr>
                        <th>Перечень проперти</th>
                        <th className={s.color}>Тип</th>
                        <th className={s.color}>Управление</th>
                    </tr>
                    {props.properties.map((pro) => <tr key={pro.id}>
                            <td>{pro.name}</td>
                            <td>{pro.type}</td>
                            <td className={s.delete}><NavLink to={'/AllProperty'}
                                                              onClick={() => dispatch(props.deleteProperty(pro.id))}>Удалить</NavLink>
                            </td>
                        </tr>
                    )}


                    </tbody>

                </table>
            </div>
        </div>
    </div>)
}