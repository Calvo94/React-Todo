import React, { Component } from 'react';
import TodoList from 'TodoList';
import TodoForm from 'TodoForm';
import TodoSearch from 'TodoSearch';

class TodoApp extends Component {
  state={
    showCompleted: false,
    searchText:'',
    todos: [
      {
        id:1,
        text: 'Walk the dog'
      },
      {
        id:2,
        text: 'Clean the yard'
      },
      {
        id:3,
        text: 'Leave mail on porch'
      },
      {
        id:4,
        text: 'Play video games'
      },
    ]
  }
  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  }
  handleAddTodo(text) {
    alert('new todo: '+text);
  }

  render() {
    const {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch.bind(this)}/>
        <TodoList todos={todos}/>
        <TodoForm handleAddTodo={this.handleAddTodo.bind(this)} />
      </div>
    );
  }
}

module.exports = TodoApp;
