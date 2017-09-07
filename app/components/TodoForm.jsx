import React, { Component } from 'react';

class TodoForm extends Component {
  onFormSubmit(e) {
      e.preventDefault();

      var todo = this.refs.todo.value;

      if(todo.length>0) {
        this.refs.todo.value='';
        this.props.handleAddTodo(todo);
      }
  }
  render () {
    return(
    <div>
      <form ref="form" onSubmit={this.onFormSubmit.bind(this)} className="todo-form">
        <input type="text" ref="todo" placeholder="Enter a todo" />
        <button className="button expanded hollow">Add todo</button>
      </form>
    </div>
  )}
}

module.exports = TodoForm;
