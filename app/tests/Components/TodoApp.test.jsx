import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jQuery';
import TodoApp from 'TodoApp';

var expect= require('expect');

describe('TodoApp', () => {
  it('should exist', () => {
      expect(TodoApp).toExist();
  });
});
