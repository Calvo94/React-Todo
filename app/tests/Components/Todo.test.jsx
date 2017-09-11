import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import {Todo} from 'Todo';
import {startToggleTodo} from 'actions';
var expect= require('expect');

describe('Todo', () => {
  it('should exist', () => {
      expect(Todo).toExist();
  });

  it('should call TOGGLE_TODO action on click', () => {
    var todoData = {
      id: 199,
      text: 'Write todo.test.jsx test',
      completed: true
    };
    var action = startToggleTodo(todoData.id,!todoData.completed);
    var createSpy = expect.createSpy();
    var todo= TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={createSpy}/>);

    var $el = $(ReactDOM.findDOMNode(todo));
    TestUtils.Simulate.click($el[0]);

    expect(createSpy).toHaveBeenCalledWith(action);
  })
});
