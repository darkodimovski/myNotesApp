import React from 'react'

export default function ButtonFavorites({setActiveTab, items}) {
    return (
        <div>
            { items.length ? (
                <div className='flex justify-between text-white font-mono'>
                <button onClick={() => setActiveTab('all')}>All</button>
                <button className='' onClick={() => setActiveTab('favorites')}>Favorites</button>
                </div>) : (<div></div>)
        }
        </div>
    )
}
