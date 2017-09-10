import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {toggleTodo} from 'actions';

export class Todo extends Component {
  render() {
    var {id , text, completed, createdAt, completedAt,dispatch } = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if (completed){
        var message = 'Completed ';
        var timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    }
    return (
      <div className={todoClassName} onClick={() => {
          dispatch(toggleTodo(id));
        }}>
        <div>
          <input type="checkbox" checked={ completed } />
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
}

export default connect()(Todo);
