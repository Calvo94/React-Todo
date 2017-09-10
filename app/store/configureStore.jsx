import {compose, combineReducers,createStore} from 'redux';
import {searchTextReducer,showCompletedReducer,todoReducer} from 'reducers';

export var configure = () => {
  var reducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todoReducer
  });

  var store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension(): f => f
  ));
  return store;
};
