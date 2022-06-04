import React from 'react'


const Search = ({ handleSearchNote }) => {
    return (
        <div>
            <input
                className='min-w-full mb-2 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-400'
                type="text" 
                placeholder='Search...'
                onChange={(e) => handleSearchNote(e.target.value)}
            />
        </div>
    )
}

export default Search;