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
        text: 'Walk the dog',
        completed:false
      },
      {
        id:uuid(),
        text: 'Clean the yard',
        completed:true
      },
      {
        id:uuid(),
        text: 'Leave mail on porch',
        completed:true
      },
      {
        id:uuid(),
        text: 'Play video games',
        completed:false
      },
    ]
  }
  handleToggle(id){
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({todos: updatedTodos})
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
          text:text,
          completed:false
        }
      ]
    })
  }

  render() {
    const {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch.bind(this)}/>
        <TodoList todos={todos} onToggle={this.handleToggle.bind(this)}/>
        <TodoForm handleAddTodo={this.handleAddTodo.bind(this)} />
      </div>
    );
  }
}

module.exports = TodoApp;
