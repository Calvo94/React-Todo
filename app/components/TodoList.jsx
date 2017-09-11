import React, { Component } from 'react';
import {connect} from 'react-redux';
import Todo from 'Todo';
import TodoAPI from 'TodoAPI';

export class TodoList extends Component {
  render() {
    var {todos,showCompleted,searchText} = this.props;
    var renderTodos = () => {
      var filtertodos = TodoAPI.filterTodos(todos,showCompleted,searchText);
      if(filtertodos.length === 0) {
        return (
          <p className="container__message">Nothing to do</p>
        );
      }
      return filtertodos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        );
      });
    };
    return (
      <div className='container__message'>
        {renderTodos()}
      </div>
    )
  }
}

export default connect(
  (state) =>{
    return state;
  }
)(TodoList);
