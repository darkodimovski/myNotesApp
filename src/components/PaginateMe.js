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
                    <li key={number} className='px-2 font-mono text-xl text-white'>
                        <a onClick={(e) => paginate(e, number)} href>
                        <button>{number}</button>
                        </a>
                    </li>
                ))}
            </ul>
            
        </nav>
    );
};

export default Pagination;