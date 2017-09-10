import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from 'TodoApp';
import { Add_Todo,setSearchText,toggleShowCompleted} from 'actions';
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState())
});

store.dispatch(Add_Todo('Clean the yard'));
store.dispatch(setSearchText('yard'));
store.dispatch(toggleShowCompleted());
// Load foundation
require('foundation-sites/dist/foundation.min.css')
$(document).foundation();

// app css
require('applicationStyles')

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
