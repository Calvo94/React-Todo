import uuid from 'node-uuid';
import moment from 'moment';
import firebase, {firebaseRef} from 'app/firebase/';

export var setSearchText = (searchText) => {
  return {
    type:'SET_SEARCH_TEXT',
    searchText
  }
}

export var toggleShowCompleted = (showCompleted) => {
  return {
    type:'TOGGLE_SHOW_COMPLETED'
  }
}

export var Add_Todo = (todo) => {
  return {
    type : 'ADD_TODO',
    todo
  }
}

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo ={
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    var todoRef = firebaseRef.child('todos').push(todo);

    return todoRef.then(() => {
      dispatch(Add_Todo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
};

export var Add_Todos = (todos) => {
  return {
    type : 'ADD_TODOS',
    todos
  };
};


export var startAddTodos = () => {
  return (dispatch, getState) => {
    var todosRef = firebaseRef.child('todos').once('value');
    return todosRef.then((snapshot) => {
      var todos = snapshot.val() || {};
      var parsedTodos = [];
      Object.keys(todos).forEach((todoId)=> {
        parsedTodos.push({
          id:todoId,
          ...todos[todoId]
        });
      });
      dispatch(Add_Todos(parsedTodos));
    });
  };
};

export var Remove_Todo = (id) => {
  return {
    type:'REMOVE_TODO',
    id
  }
}

export var updateTodo = (id, updates) => {
  return {
    type:'UPDATE_TODO',
    id,
    updates
  }
}

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    var todoRef = firebaseRef.child(`todos/${id}`);
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };
    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  };
};
