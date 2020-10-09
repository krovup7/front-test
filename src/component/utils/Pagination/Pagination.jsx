import React from 'react';
import s from './Pagination.module.css'

export const Pagination = ({ itemsPerPage, totalItems, paginate,currentPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
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
