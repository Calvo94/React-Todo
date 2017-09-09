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
