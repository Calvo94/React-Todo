import expect from 'expect';
import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {
  beforeEach(()=> {
    localStorage.removeItem('todos');
  });
  it('should existe', () => {
    expect(TodoAPI).toExist();
  });
    describe('filterTodos', () => {
      var todos = [{
          id: 1,
          text: 'some text here',
          completed:true
        },{
          id: 2,
          text: 'other text here',
          completed:false
        },{
          id: 3,
          text: 'some text here',
          completed:true
        }
      ];
      it('should return all items if showCompleted is true', () => {
        var filterTodos = TodoAPI.filterTodos(todos,true, '');
        expect(filterTodos.length).toBe(3);
      });
      it('should return non-completed todos if showCompleted is false', () => {
        var filterTodos = TodoAPI.filterTodos(todos,false, '');
        expect(filterTodos.length).toBe(1);
      })
      it('should sort by completed status', () => {
        var filterTodos = TodoAPI.filterTodos(todos, true, '');
        expect(filterTodos[0].completed).toBe(false);
      })
      it('should filter todos by searchText', () => {
        var filterTodos = TodoAPI.filterTodos(todos, true, 'some');
        expect(filterTodos.length).toBe(2);
      })
    });
  });

})
