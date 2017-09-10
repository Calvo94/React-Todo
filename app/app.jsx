import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from 'TodoApp';
import {Provider} from 'react-redux';
import { Add_Todo,setSearchText,toggleShowCompleted} from 'actions';
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState())
});

// Load foundation
require('foundation-sites/dist/foundation.min.css')
$(document).foundation();

// app css
require('applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
