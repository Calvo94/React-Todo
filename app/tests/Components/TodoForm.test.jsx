import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import {TodoForm} from 'TodoForm';

var expect= require('expect');

describe('TodoForm', () => {
  it('should exist', () => {
    expect(TodoForm).toExist;
  })

  it ('should dispatch ADD_TODO if valid todo entered', () => {
    var todoText = 'check mail';
    var action = {
      type: 'ADD_TODO',
      text: todoText
    }
    var createSpy = expect.createSpy();
    var todoForm= TestUtils.renderIntoDocument(<TodoForm dispatch={createSpy}/>);
    var $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todo.value=todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(createSpy).toHaveBeenCalledWith(action);
  });

  it ('should not dispatch ADD_TODO when invalid todotext', () => {
    var createSpy = expect.createSpy();
    var todoForm= TestUtils.renderIntoDocument(<TodoForm dispatch={createSpy}/>);
    var $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todo.value='';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(createSpy).toNotHaveBeenCalled();
  });
});
