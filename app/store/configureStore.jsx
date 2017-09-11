import {applyMiddleware,compose, combineReducers,createStore} from 'redux';
import thunk from 'redux-thunk';
import {searchTextReducer,showCompletedReducer,todoReducer} from 'reducers';

export var configure = (initialState= {}) => {
  var reducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todoReducer
  });

  var store = createStore(reducer, initialState,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension(): f => f
  ));
  return store;
};
