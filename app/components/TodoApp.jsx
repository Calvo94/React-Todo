import React, { Component } from 'react';
import TodoList from 'TodoList';
import TodoForm from 'TodoForm';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';

class TodoApp extends Component {
  state={
    showCompleted: false,
    searchText:'',
    todos: [
      {
        id:uuid(),
        text: 'Walk the dog'
      },
      {
        id:uuid(),
        text: 'Clean the yard'
      },
      {
        id:uuid(),
        text: 'Leave mail on porch'
      },
      {
        id:uuid(),
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
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text:text
        }
      ]
    })
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
