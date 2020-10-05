import React from "react";
import s from './AllItems.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteItem, sortItems} from "../../redux/actions/ItemsAction";
import {Icon} from '@iconify/react';
import chevronSortDown from '@iconify/icons-carbon/chevron-sort-down';
import Pagination from "../utils/Pagination/Pagination";

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
                <NavLink to={'/AddItem'} className={s.button}>Добавить товар</NavLink>
            </div>
            <div>
                <input className={s.search} type={'text'} placeholder={'search'}
                       onChange={e => props.setSearch(e.target.value)}/>
                <table className={s.table} cellSpacing="0">
                    <tbody>
                    <tr>
                        <th>Перечень товаров<Icon icon={chevronSortDown} width='30' cursor='pointer'
                                                  onClick={event => dispatch(sortItems(event))}/></th>
                        <th className={s.color}>Стоимость</th>
                        <th className={s.color}>Дата изменения</th>
                        <th className={s.color}>Управление</th>
                    </tr>
                    {props.currentPosts.map((item) => <tr key={item.id}>
                            <td><NavLink to={'/ItemCard/' + item.id}>{item.name}</NavLink></td>
                            <td>{item.price.toLocaleString('ru')}{item.currency}</td>
                            <td>{item.changed}</td>
                            <td className={s.edit}><NavLink to={'/ChangeItem/' + item.id}>Ред.</NavLink> <NavLink to={'/'}
                                                                                                                  onClick={() => dispatch(deleteItem(item.id))}>Удалить</NavLink>
                            </td>
                        </tr>
                    )}


                    </tbody>

                </table>
            </div>
            <Pagination
                currentPage={props.currentPage}
                postsPerPage={props.postsPerPage}
                totalPosts={props.totalPosts}
                paginate={props.paginate}
            />
        </div>

    </div>)

}
