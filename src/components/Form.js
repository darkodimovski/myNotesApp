import React from 'react'

function Form({ onCreate, onUpdate, onInputChange, mode, item }) {

    const handleSubmit = e => {
    e.preventDefault();
    mode === "create" ? onCreate() : onUpdate();
}

return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">
                <input
                    className='min-w-full mb-2 px-3 py-1 rounded-md border border-orange-300 shadow-sm focus:outline-none focus:border-purple-300 focus:ring-1 focus:ring-purple-400'
                    required 
                    type="text" 
                    value={item.title}
                    placeholder='Note title'
                    onChange={e => onInputChange('title', e.target.value)}
                />
            </label>

            <label htmlFor="note">
                <textarea 
                    className='min-w-full mb-2 px-3 py-1 rounded-md border border-orange-300 shadow-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-400 pb-12'
                    required
                    value={item.note}
                    placeholder="Note description"
                    onChange={e => onInputChange('note', e.target.value)}
                />
            </label>
            <div className='flex justify-center'>
                <button className='text-white bg-purple-400 px-3 py-1 rounded-md hover:bg-orange-400 hover:text-black mr-2 font-mono'>{mode === 'create' ? 'Create' : 'Save'}</button>
            </div>
    
            
        </form>
    </div>
)
}

export default Form