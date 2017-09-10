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

export var Add_Todo = (text) => {
  return {
    type : 'ADD_TODO',
    text
  }
}

export var Add_Todos = (todos) => {
  return {
    type : 'ADD_TODOS',
    todos
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
