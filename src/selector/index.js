import { createSelector } from "reselect";

import { filtersConstants } from "../constants/filters.constans";

const getFilter = (state) => state.filter
const getTodos = (state) => state.todos.get('todoData')

export const getTodolist = createSelector(
  [getFilter, getTodos],
  (visibilityFilter, todos) => {
    // eslint-disable-next-line default-case
    switch (visibilityFilter) {
      case filtersConstants.SHOW_ALL:
        return todos
      case filtersConstants.SHOW_COMPLETED:
        return todos.filter(t => t.complate)
      case filtersConstants.SHOW_ACTIVE:
        return todos.filter(t => !t.complate)
    }
  }
)

export const getActiveCount = createSelector(
  [ getTodos ],
  (todos) => todos.filter(todo => !todo.complate).length
)

export const getCompletedCount = createSelector(
  [ getTodos ],
  (todos) => todos.filter(todo => todo.complate).length
)