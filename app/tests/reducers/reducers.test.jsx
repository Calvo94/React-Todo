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
        todo:{
          id:'abc123',
          text:'walk the dog',
          completed:false,
          createdAt: 123
        }
      };
      var res = todoReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    })
    it('should update a todo', () => {
      var todos = [
        {
          id:'123',
          text: 'something',
          completed: true,
          createdAt: 123,
          completedAt:125
        }
      ]
      var updates = {
        completed: false,
        completedAt: null
      }
      var action = {
        type: 'UPDATE_TODO',
        id : todos[0].id,
        updates
      };
      var res = todoReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });
    it('should add existing todos', () => {
      var todos =[{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 2023
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };
      var res = todoReducer(df([]),df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    })
  })
})
