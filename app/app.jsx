import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from 'TodoApp';

// Load foundation
$(document).foundation();

// app css
require('applicationStyles')

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
