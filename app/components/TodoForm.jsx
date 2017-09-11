import React, { Component } from 'react';
import {connect} from 'react-redux';
import {startAddTodo} from 'actions';
export class TodoForm extends Component {
  onFormSubmit(e) {
      e.preventDefault();
      var {dispatch} = this.props;
      var todo = this.refs.todo.value;

      if(todo.length>0) {
        this.refs.todo.value='';
        dispatch(startAddTodo(todo));
      } else {
        this.refs.todo.focus();
      }
  }
  render () {
    return(
    <div className="container__footer">
      <form ref="form" onSubmit={this.onFormSubmit.bind(this)} className="todo-form">
        <input type="text" ref="todo" placeholder="Enter a todo" />
        <button className="button expanded">Add todo</button>
      </form>
    </div>
  )}
}

export default connect()(TodoForm);
