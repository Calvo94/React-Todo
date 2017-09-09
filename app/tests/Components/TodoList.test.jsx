import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';
import TodoList from 'TodoList';
import Todo from 'Todo';
var expect= require('expect');

describe('TodoList', () => {
  it('should exist', () => {
      expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    const todos =[{
        id: 1,
        text: 'Do something'
      }, {
        id: 2,
        text: 'Chech mail'
      }
    ];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render render empty message if no todos', () => {
    const todos =[];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el= $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });

});
