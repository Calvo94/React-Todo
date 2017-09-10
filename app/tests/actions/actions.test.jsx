import expect from 'expect';
import { setSearchText, Add_Todo, toggleShowCompleted, toggleTodo, Add_Todos } from 'actions';

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
      text:'making breakfast'
    };
    expect(Add_Todo).toExist();
    var res = Add_Todo(action.text);

    expect(res).toEqual(action);
  });

  it('should generate add_todos action', () => {
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
    expect(Add_Todos).toExist();
    var res = Add_Todos(action.todos);
    expect(res).toEqual(action);
  });

})
