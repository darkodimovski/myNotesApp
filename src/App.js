import React, { useState, useEffect } from 'react'
import ButtonFavorites from './components/ButtonFavorites';
import { Favorites } from './components/Favorites';
import Form from './components/Form';
import Notes from './components/Notes'
import PaginateMe from './components/PaginateMe';
import Search from './components/Search'


function App() {
  const [mode, setMode] = useState('create');
  const [items, setItems] = useState('');
  const [formItem, setFormItem] = useState({title: '', note: ''});
  const [search, setNewSearch] = useState('');
  const [activeTab, setActiveTab] = useState('all')
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);


useEffect(() => {
    const items = JSON.parse(localStorage.getItem('tars'));
    if(items) {
    setItems(items)
    }
}, [])

useEffect(() => {
  localStorage.setItem('tars', JSON.stringify(items))
}, [items])


const handleInputChange = (name, value) => {
  setFormItem({...formItem, [name]: value});
};

const handleCreate = () => {
  const { title, note } = formItem;
  const date = new Date();
  const newItems = {
    id: items.length + 1,
    title,
    note,
    date: date.toLocaleDateString(),
  };

  setItems([...items, newItems])
  setFormItem({ title: '', note: '' })
};

const handleEdit = (item) => {
  setMode('edit');
  setFormItem(item);
};


const handleUpdate = () => {
  const index = items.findIndex((item) => item.id === formItem.id);
  const updatedItems = [...items];
  updatedItems[index] = formItem;

  setMode('create')
  setItems(updatedItems)
  setFormItem({ title: '', note: ''});
};


const handleDelete = (id) => {
  const newItems = items.filter((item) => item.id !== id);
  setItems(newItems)
};


const addFavorite = (id) => {
  const allItems = [...items];
  const itemIndex = allItems.findIndex((item) => item.id === id);
  allItems[itemIndex].fav = !allItems[itemIndex].fav;
  setItems(allItems)
}


const filteredData = [...items].filter(item => {
  return Object.keys(item).some(key => {
    return (
      item[key].toString().toLowerCase().includes(search) ||
      item[key].toString().toUpperCase().includes(search)
    )
  })
})

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);

/* const paginate = pageNumber => setCurrentPage(pageNumber); */
const paginate = (event, pageNumber) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
}

return (
  <>
    <div className='bg-teal-700 max-w-2xl content-center items-center flex justify-center mx-auto mt-10 rounded-md p-4 mb-10'>
      <div>
        <h1 className='text-3xl flex justify-center pb-10 text-white font-mono' data-testid='title'>My Notes App</h1>
        <Search handleSearchNote={setNewSearch} />
        <Form 
          mode={mode}
          item={formItem}
          onCreate={handleCreate}
          onUpdate={handleUpdate}
          onInputChange={handleInputChange}
          />
        <br />
        <ButtonFavorites setActiveTab={setActiveTab} items={items} />
        {activeTab === 'all' && 
        <Notes items={currentPosts} onEdit={handleEdit} onDelete={handleDelete} handleFavToggle={addFavorite} />
        }
        {activeTab === 'favorites' && 
        <Favorites items={currentPosts} onEdit={handleEdit} onDelete={handleDelete} handleFavToggle={addFavorite} />}
        <PaginateMe
          postsPerPage={postsPerPage}
          totalPosts={items.length}
          paginate={paginate}
          items={currentPosts}
        />
      </div>
    </div>
    
  </>
  )
}

export default App