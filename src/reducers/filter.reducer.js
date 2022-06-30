import { todosConstants } from '../constants/todos.constans';
import { filtersConstants } from '../constants/filters.constans'

export function filter(state = filtersConstants.SHOW_ALL, action) {
  switch (action.type) {
    case todosConstants.SET_FILTER:
      return action.payload
    default:
      return state
  }
}