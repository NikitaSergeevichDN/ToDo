import React, { useState } from 'react';
import Header from './components/Header';
import SearchPanel from './components/SearchPanel';
import PostStatusFilter from './components/PostStatusFilter';
import PostList from './components/PostList';
import PostAddForm from './components/PostAddForm';
import './App.css';

const posts = [
  {label: 'Going to learn React', important: true, like: false, id: 1},
  {label: 'That is so good', important: false, like: false, id: 2},
  {label: 'I need a break...', important: false, like: false, id: 3}
];

const App = () => {
  const [data, setData] = useState(posts);
  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('all');
  let maxId = 4;

  const deleteItem = (id) => {
    setData(({data}) => {
      const index = data.findIndex(item => item.id === id);
      const newData = [...data.slice(0, index), ...data.slice(index + 1)];
      return newData;
    });
  }

  const addItem = (text) => {
    const newDataItem = {
      label : text,
      important: false,
      id : maxId++
    }

    setData(({data}) => {
      const newData = [...data, newDataItem];
      return {
        newData
      }
    });
  }

  const onToggleimportant = (id) => {
    setData(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const old = data[index];
      const newItem = {...old, important:!old.important};
      const newData = [...data.slice(0,index), newItem, ...data.slice(index + 1)];
      return{
        newData
      }
    });
  }

  const onToggleLike = (id) => {
    setData(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const old = data[index];
      const newItem = {...old, like:!old.like};
      const newData = [...data.slice(0,index), newItem, ...data.slice(index + 1)];

      return{
        newData
      }
    });
  }

  const filterPosts = (items, filter) => {
    if(filter === 'like') {
      return items.filter(item => item.like);
    } else {
      return items;
    }
  }

  const searchPost = (items, term) => {
    if(term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.label.indexOf(term) > -1;
    })
  }

  const onUpdateSearch = (term) => {
    setTerm({term});
  }

  const onFilterSelect = (filter) => {
    setFilter({filter});
  }

  const likedPosts = data.filter(item => item.like).length;
  const allPosts = data.length;
  const visiblePosts = filterPosts(searchPost(data, term), filter);

  return (
    <div className="app">
      <Header
        allPosts={allPosts}
        likedPosts={likedPosts}
      />
      <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch = {onUpdateSearch}/>
          <PostStatusFilter
            filter={filter}
            onFilterSelect={onFilterSelect}
          />
      </div>
      <PostAddForm onAdd = {addItem}/>
      <PostList
        posts={visiblePosts}
        onDelete={id => deleteItem(id)}
        onToggleimportant = {onToggleimportant}
        onToggleLike = {onToggleLike}
      />
  </div>
  );
}

export default App;
