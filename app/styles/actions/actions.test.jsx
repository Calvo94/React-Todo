import expect from 'expect';
import { setSearchText, Add_Todo, toggleShowCompleted, toggleTodo } from 'actions';

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText:'Some Search text'
    };
    expect(setSearchText).toExist();
    var res = setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    var action = {
      type:'TOGGLE_SHOW_COMPLETED'
    };
    var res = toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    var action ={
      type:'TOGGLE_TODO',
      id:'123'
    }
    var res = toggleTodo(action.id);

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      todo:'making breakfast'
    };
    expect(Add_Todo).toExist();
    var res = Add_Todo(action.todo);

    expect(res).toEqual(action);
  });
})
