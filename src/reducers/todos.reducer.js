import { Map, List } from 'immutable';

import { todosConstants } from '../constants/todos.constans';

const initialState = Map({
  todoData: List([]),
})

export function todos(state = initialState, action) {
  switch (action.type) {
    case todosConstants.TODOS_SUCCESS:
      return state.merge({
        todoData: action.payload
      })
    case todosConstants.ADD_SUCCESS:
      return state.merge({
        todoData: state.get('todoData').concat(action.payload)
      })
    case todosConstants.REMOVE_SUCCESS:
      return state.merge({ 
        todoData: state.get('todoData').filter(todo => todo.id !== action.payload)
      })
    case todosConstants.UPDATE_SUCCESS:
      return state.merge({ 
        todoData: state.get('todoData').map(todo => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              ...action.payload
            }          
          } else {
            return todo
          }
        })
      })
    case todosConstants.CHECK_SUCCESS:
      return state.merge({ 
        todoData: state.get('todoData').map(todo => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              ...action.payload
            }          
          } else {
            return todo
          }
        })
      })
    case todosConstants.UPDATE_ALL_SUCCESS:
      return state.merge({
        todoData: state.get('todoData').map(todo => {
          const found = action.payload.find(item => item.id === todo.id)
          if(found) {
            found.complate = !todo.complate
            return {
              ...todo,
              ...found
            }
          } else {
            return todo
          }
        })
      })
    case todosConstants.DELETE_ALL_SUCCESS:
      return state.merge({ 
        todoData: state.get('todoData').filter(todo => !todo.complate)
      })
    default:
      return state;
  }
};