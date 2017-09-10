import React, { Component } from 'react';
import TodoList from 'TodoList';
import TodoForm from 'TodoForm';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';
import moment from 'moment';

class TodoApp extends Component {

  render() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="small-centered small-11 medium-6 large-5 columns">
            <div className="container">
              <TodoSearch/>
              <TodoList />
              <TodoForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = TodoApp;
