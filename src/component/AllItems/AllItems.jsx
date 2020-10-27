import React from "react";
import s from './AllItems.module.css'
import {NavLink} from "react-router-dom";
import {Icon} from '@iconify/react';
import chevronSortDown from '@iconify/icons-carbon/chevron-sort-down';
import {Item} from "./Item";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css"; //for css
export const AllItems = (props) => {
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
                <NavLink to={'/AddItem'} className={s.addProduct}>Добавить товар</NavLink>
            </div>
            <div>
                <input className={s.search} type={'text'} placeholder={'search'}
                       onChange={e => props.setSearch(e.target.value)}/>
                <table className={s.tableItems} cellSpacing="0">
                    <tbody>
                    <tr>
                        <th>Перечень товаров<Icon icon={chevronSortDown} width='30' cursor='pointer'
                                                  onClick={event => props.sortItems(event)}/></th>
                        <th className={s.colorName}>Стоимость</th>
                        <th className={s.colorName}>Дата изменения</th>
                        <th className={s.colorName}>Управление</th>
                    </tr>
                    {props.currentItems.map((item) =>
                        <Item key={item.id} id={item.id} name={item.name} price={item.price} currency={item.currency} changed={item.changed} deleteProduct={props.deleteProduct}/>
                    )}
                    </tbody>
                </table>
            </div>
            <Pagination
                currentPage = {props.currentPage}
                totalPages = {props.totalItems}
                changeCurrentPage = {props.paginate}
                theme="square-fill"
            />
        </div>

    </div>)

}
