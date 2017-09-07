import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jQuery';
import Todo from 'Todo';

var expect= require('expect');

describe('Todo', () => {
  it('should exist', () => {
      expect(Todo).toExist();
  });
});
