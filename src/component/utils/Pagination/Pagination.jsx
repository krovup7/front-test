import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Pagination.module.css'
const Pagination = ({ postsPerPage, totalPosts, paginate,currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className={s.pageItem}>
                        <span onClick={() => paginate(number)}  className={currentPage === number && s.selectedPage}>
                            {number}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;