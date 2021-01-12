import './App.css';
import Header from './components/Header';
import SearchPanel from './components/SearchPanel';
import PostStatusFilter from './components/PostStatusFilter';
import PostList from './components/PostList';
import PostAddForm from './components/PostAddForm';
import { Component } from 'react';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : [
        {label: 'Going to learn React', important: true, like: false, id: 1},
        {label: 'That is so good', important: false, like: false, id: 2},
        {label: 'I need a break...', important: false, like: false, id: 3}
      ],
      term : '',
      filter: 'all'
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleimportant = this.onToggleimportant.bind(this);
    this.onToggleLike = this.onToggleLike.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
    this.maxId = 4;
  }

  deleteItem(id) {
    this.setState(({data}) => {
      const index = data.findIndex(item => item.id === id);

      const beforeDelete = data.slice(0, index);
      const afterDelete = data.slice(index + 1);
      const newData = [...beforeDelete, ...afterDelete];

      return {
        data : newData
      }
    })
  }

  addItem(text) {
    const newDataItem = {
      label : text,
      important: false,
      id : this.maxId++
    }

    this.setState(({data}) => {
      const newData = [...data, newDataItem];
      return {
        data : newData
      }
    })
  }

  onToggleimportant(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const old = data[index];
      const newItem = {...old, important:!old.important};
      const newData = [...data.slice(0,index), newItem, ...data.slice(index + 1)];

      return{
        data : newData
      }
    })
  }

  onToggleLike(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const old = data[index];
      const newItem = {...old, like:!old.like};
      const newData = [...data.slice(0,index), newItem, ...data.slice(index + 1)];

      return{
        data : newData
      }
    })
  }

  filterPosts(items, filter) {
    if(filter === 'like') {
      return items.filter(item => item.like);
    } else {
      return items;
    }
  }

  seacrhPost(items, term) {
    if(term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.label.indexOf(term) > -1;
    })
  }

  onUpdateSearch (term) {
    this.setState({term});
  }

  onFilterSelect(filter){
    this.setState({filter})
}

  render() {
    const {data, term, filter} = this.state;
    const likedPosts = data.filter(item => item.like).length;
    const allPosts = data.length;
    const visiblePosts = this.filterPosts(this.seacrhPost(data, term), filter);

    return (
      <div className="app">
        <Header
          allPosts={allPosts}
          likedPosts={likedPosts}/>
        <div className="search-panel d-flex">
            <SearchPanel
              onUpdateSearch = {this.onUpdateSearch}/>
            <PostStatusFilter
              filter={filter}
              onFilterSelect={this.onFilterSelect}/>
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={id => this.deleteItem(id)}
          onToggleimportant = {this.onToggleimportant}
          onToggleLike = {this.onToggleLike}/>
        <PostAddForm
          onAdd = {this.addItem}/>
    </div>
    );
  }
}
