import React from 'react';
import ReactDOM from 'react-dom';

var objOne = {
  name: 'Andrew',
  location: 'Philadelphia'
}

var objTwo = {
  age: 25,
  ...objOne
}

console.log(objTwo);

ReactDOM.render(
  <h1>Boilerplate app!</h1>,
  document.getElementById('app')
);
