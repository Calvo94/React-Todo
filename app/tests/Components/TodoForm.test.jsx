import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import TodoForm from 'TodoForm';

var expect= require('expect');

describe('TodoForm', () => {
  it('should exist', () => {
    expect(TodoForm).toExist;
  })

  it ('should call handleAddTodo if valid todo entered', () => {
    var createSpy = expect.createSpy();
    var todoForm= TestUtils.renderIntoDocument(<TodoForm handleAddTodo={createSpy}/>);
    var $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todo.value='109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(createSpy).toHaveBeenCalledWith('109');
  });

  it ('should not call handleAddTodo if not valid todo entered', () => {
    var createSpy = expect.createSpy();
    var todoForm= TestUtils.renderIntoDocument(<TodoForm handleAddTodo={createSpy}/>);
    var $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todo.value='';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(createSpy).toNotHaveBeenCalled();
  });
});
