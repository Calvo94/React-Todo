import expect from 'expect';
import {searchTextReducer,showCompletedReducer} from 'reducers';
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
})
