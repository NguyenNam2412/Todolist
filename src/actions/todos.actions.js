import { todosConstants } from '../constants/todos.constans';

export const todosActions = {
  getAllTodos,
  add,
  remove,
  update,
  check,
  setFilter,
  updateAll,
  deleteAll
};

function getAllTodos() {
  return {
    type: todosConstants.TODOS_REQUEST
  };
}

function add(title) {
  return {
    type: todosConstants.ADD_REQUEST,
    payload: title
  }
}

function remove(id) {
  return {
    type: todosConstants.REMOVE_REQUEST,
    payload: id
  }  
}

function update(id, titleUpdate) {
  return {
    type: todosConstants.UPDATE_REQUEST,
    payload: {id: id, title: titleUpdate}
  }
}

function check(todo) {
  return {
    type: todosConstants.CHECK_REQUEST,
    payload: {id: todo.id, title: todo.title, complate: !todo.complate}
  }
}

function setFilter(id) {
  return {
    type: todosConstants.SET_FILTER,
    payload: id
  }
}

function updateAll(list) {
  return {
    type: todosConstants.UPDATE_ALL_REQUEST,
    payload: list
  }
}

function deleteAll(list) {
  return {
    type: todosConstants.DELETE_ALL_REQUEST,
    payload: list
  }
}