import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from 'TodoApp';
import {Provider} from 'react-redux';
import { Add_Todo,setSearchText,toggleShowCompleted,Add_Todos,startAddTodos} from 'actions';
import TodoAPI from 'TodoAPI';

var store = require('configureStore').configure();

// store.subscribe(() => {
//   var state = store.getState();
//   console.log('New state', store.getState())
//
//   TodoAPI.setTodos(state.todos);
// });
//
 //var initialTodos = TodoAPI.getTodos();
// store.dispatch(Add_Todos(initialTodos));

store.dispatch(startAddTodos());

// Load foundation
$(document).foundation();

// app css
require('applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
