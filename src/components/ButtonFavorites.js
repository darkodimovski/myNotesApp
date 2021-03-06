import React from 'react'

export default function ButtonFavorites({setActiveTab, items}) {
    return (
        <div className='mb-1'>
            { items.length ? (
                <div className='flex justify-between text-white font-mono'>
                    <button className='hover:text-purple-300' onClick={() => setActiveTab('all')}>All</button>
                    <button className='hover:text-purple-300' onClick={() => setActiveTab('favorites')}>Favorites</button>
                </div>) : (<div></div>)
        }
        </div>
    )
}
