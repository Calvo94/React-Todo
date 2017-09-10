import expect from 'expect';
import {searchTextReducer,showCompletedReducer, todoReducer} from 'reducers';
import df from 'deep-freeze-strict';

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type:'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res= searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    })
  });

  describe('showCompletedReducer', () => {
    it('should set showCompleted', () => {
      var action = {
        type:'TOGGLE_SHOW_COMPLETED'
      };
      var res= showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    })
  });
  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'walk the dog'
      };
      var res = todoReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    })
    it('should toggle a todo', () => {
      var todos = [
        {
          id:'123',
          text: 'something',
          completed: true,
          createdAt: 123,
          completedAt:125
        }
      ]
      var action = {
        type: 'TOGGLE_TODO',
        id:'123'
      };
      var res = todoReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    })
  })
})
