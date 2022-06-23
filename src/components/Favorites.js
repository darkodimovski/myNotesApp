import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';


export const Favorites = ({ items, onEdit, onDelete, handleFavToggle }) => {

    const filtered = [...items].filter((x) => x.fav === true);
        
    return (
        <div>
            {  
            filtered.map((fav) => {
                return (
                    <div key={fav.id} className="border-t-2 border-orange-300 mb-2 max-w-lg">
                        <div>
                            <h4 className="mt-2 text-white font-bold font-mono">{fav.title}</h4>
                            <h4 className="text-white text-sm font-mono italic mb-8">{fav.note}</h4>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                            <div>
                                <button 
                                    className="text-white bg-red-600 rounded-lg hover:bg-red-500 hover:text-black text-sm px-2 py-1" 
                                    onClick={() => onDelete(fav.id)}>Delete
                                </button>
                                <button 
                                    className="text-white bg-blue-600 rounded-lg hover:bg-blue-500 hover:text-black text-sm px-2 py-1 ml-1" 
                                    onClick={() => onEdit(fav)}>Edit
                                </button>
                            </div>
                            <div className='flex ml-2'>
                                <button
                                    className="content-start items-center" 
                                    onClick={() => {handleFavToggle(fav.id)}}>
                                    {fav.fav === true ? <FaHeart /> : <FaRegHeart/>} 
                                </button>
                            </div>
                        </div>
                            <div className="text-white font-mono">
                                <small>Date: {fav.date}</small>
                            </div>
                    </div>
                    
                    )
                })
            }
        </div>
    )
}
