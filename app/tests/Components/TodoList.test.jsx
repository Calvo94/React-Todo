import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';
import ConnectedTodoList, { TodoList } from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';
import {Provider} from 'react-redux';
import {configure} from 'configureStore';

var expect= require('expect');

describe('TodoList', () => {
  it('should exist', () => {
      expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    const todos =[{
        id: 1,
        text: 'Do something',
        completed: false,
        completedAt: undefined,
        createdAt: 500,
      }, {
        id: 2,
        text: 'Chech mail',
        completed: false,
        completedAt: undefined,
        createdAt: 500,
      }
    ];
    var store = configure({
      todos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );

    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];

    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render render empty message if no todos', () => {
    const todos =[];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el= $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });

});
