import { combineReducers } from 'redux'

import { authentication, registration } from './auth.reducer'
import { todos } from './todos.reducer'
import { alert } from './alert.reducer'
import { filter } from './filter.reducer'

const rootReducer = combineReducers({
  authentication,
  registration,
  todos,
  alert,
  filter
});

export default rootReducer