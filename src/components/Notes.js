import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';


export default function Notes({ items, onEdit, onDelete, handleFavToggle}) {

    return (
        items.length ? (
            items
                .map((item) => {
                return (
                <div key={item.id} className="border-t-2 border-orange-300 mb-2 max-w-lg font-mono">
                    <div>
                        <h4 className="mt-2 text-white font-bold font-mono">{item.title}</h4>
                        <h4 className="text-white text-sm font-mono italic mb-8">{item.note}</h4>
                    </div>
                        <div className="mt-2 flex items-center justify-between">
                            <div>
                                <button 
                                    className="text-white bg-red-600 rounded-lg hover:bg-red-500 hover:text-black text-sm px-2 py-1" 
                                    onClick={() => onDelete(item.id)}>Delete
                                </button>
                                <button 
                                    className="text-white bg-blue-600 rounded-lg hover:bg-blue-500 hover:text-black text-sm px-2 py-1 ml-1" 
                                    onClick={() => onEdit(item)}>Edit
                                </button>
                            </div>
                            <div className='flex ml-2'>
                                <button
                                    className="text-white content-start items-center text-xl" 
                                    onClick={() => {handleFavToggle(item.id)}}>
                                    {item.fav === true ? <FaHeart /> : <FaRegHeart/>} 
                                </button>
                            </div>
                        </div>
                    <div className="text-white font-mono">
                        <small>Date: {item.date}</small>
                    </div>
                </div> 
            )})
        ) : (
            <div className='flex justify-center pb-5 text-white font-mono italic'>Enter new notes...
            </div>
        )
    )
}

