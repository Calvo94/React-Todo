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

export var Add_Todos = (todos) => {
  return {
    type : 'ADD_TODOS',
    todos
  };
};

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

export var Remove_Todo = (id) => {
  return {
    type:'REMOVE_TODO',
    id
  }
}
export var toggleTodo = (id) => {
  return {
    type:'TOGGLE_TODO',
    id
  }
}
