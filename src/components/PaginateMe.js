import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='flex justify-center list-style-none'>
                {
                    pageNumbers.map(number => (
                    <li key={number} className='px-2 text-2xl'>
                        <a onClick={() => paginate(number)} href='!#' className=''>
                        {number}
                        </a>
                    </li>
                ))}
            </ul>
            
        </nav>
    );
};

export default Pagination;