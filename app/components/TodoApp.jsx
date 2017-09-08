import React, { Component } from 'react';
import TodoList from 'TodoList';
import TodoForm from 'TodoForm';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';
import TodoAPI from 'TodoAPI';
import moment from 'moment';

class TodoApp extends Component {
  state={
    showCompleted: false,
    searchText:'',
    todos: TodoAPI.getTodos()
  }
  handleToggle(id){
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });
    this.setState({todos: updatedTodos})
  }
  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
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
          completed:false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    })
  }

  render() {
    const {todos, showCompleted, searchText} = this.state;
    var filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch.bind(this)}/>
        <TodoList todos={filterTodos} onToggle={this.handleToggle.bind(this)}/>
        <TodoForm handleAddTodo={this.handleAddTodo.bind(this)} />
      </div>
    );
  }
}

module.exports = TodoApp;
