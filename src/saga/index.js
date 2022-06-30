import { call, put, takeEvery, all, fork } from 'redux-saga/effects';

import todosService from '../services/todos.service';
import { todosConstants } from '../constants/todos.constans';
import authService from '../services/auth.service';
import { authConstants } from '../constants/auth.constants';

function* fetchAllTodos() {
  try {
    const { data } = yield call(todosService.getAllTodo);
    yield put({
      type: todosConstants.TODOS_SUCCESS,
      payload: data
    })
  } catch (err) {
    yield put({ 
      type: todosConstants.TODOS_FAILURE, 
      payload: err
    })
  }
}

function* addTodo(action) {
  try {
    const { data } = yield call(todosService.add, action.payload)
    yield put({ 
      type: todosConstants.ADD_SUCCESS,
      payload: data
    })
  } catch (err) {
    yield put({
      type: todosConstants.ADD_FAILURE,
      payload: err
    })
  }
}

function* deleteTodo(action) {
  const id = action.payload
  try {
    yield call(todosService.remove, id)
    yield put({
      type: todosConstants.REMOVE_SUCCESS,
      payload: action.payload
    })
  } catch (err) {
    yield put({
      type: todosConstants.REMOVE_FAILURE,
      payload: err
    })
  }
}

export function* updateTodo(action) {
  try {
    yield call(todosService.update, action.payload)
    yield put({
      type: todosConstants.UPDATE_SUCCESS,
      payload: action.payload
    })
  } catch (err) {
    yield put({
      type: todosConstants.UPDATE_FAILURE,
      payload: err
    })
  }
}

export function* checkTodo(action) {
  try {
    yield call(todosService.check, action.payload)
    yield put({
      type: todosConstants.CHECK_SUCCESS,
      payload: action.payload
    })
  } catch (err) {
    yield put({
      type: todosConstants.CHECK_FAILURE,
      payload: action.payload
    })
  }
}

export function* checkAllTodo(action) {
  try {
    yield call(todosService.updateAll, action.payload)
    yield put({
      type: todosConstants.UPDATE_ALL_SUCCESS,
      payload: action.payload
    })
  } catch (err) {
    yield put({
      type: todosConstants.UPDATE_ALL_FAILURE,
      payload: action.payload
    })
  }
}

export function* deleteAllTodo(action) {
  try {
    yield call(todosService.deleteAll, action.payload)
    yield put({
      type: todosConstants.DELETE_ALL_SUCCESS,
      payload: action.payload
    })
  } catch (err) {
    yield put({
      type: todosConstants.DELETE_ALL_FAILURE,
      payload: action.payload
    })
  }
}

export function* login(action) {
  try {
    yield call(authService.login, action.payload)
    const response = localStorage.getItem('user').length
    if( response > 0 ) {
      yield put({
        type: authConstants.LOGIN_SUCCESS
      })
      yield put ((window.location.href = ("/todos")))
    } else {
      yield put({ 
        type: authConstants.LOGIN_FAILURE,
        payload: action.payload
      })
    }
  } catch (err) {
    yield put({
      type: authConstants.LOGIN_FAILURE,
      payload: err
    })
  }
}

export function* logout() {
  yield call(authService.logout)
  yield put ((window.location.href = ("/")))
}

export function* register(action) {
  try {
    yield call(authService.register, action.payload)
    yield put({
      type: authConstants.REGISTER_SUCCESS,
      payload: action.payload
    })
    yield put ((window.location.href = ("/")))
  } catch (err) {
    yield put({
      type: authConstants.REGISTER_FAILURE,
      payload: action.payload
    })
  }
}

export function* watchFetchTodos() {
  yield takeEvery(todosConstants.TODOS_REQUEST, fetchAllTodos);
}

export function* watchPutTodo() {
  yield all([
    takeEvery(todosConstants.ADD_REQUEST, addTodo),
    takeEvery(todosConstants.UPDATE_REQUEST, updateTodo),
    takeEvery(todosConstants.CHECK_REQUEST, checkTodo),
    takeEvery(todosConstants.UPDATE_ALL_REQUEST, checkAllTodo)
  ])
}

export function* watchDeleteTodo() {
  yield all([
    yield takeEvery(todosConstants.REMOVE_REQUEST, deleteTodo),
    yield takeEvery(todosConstants.DELETE_ALL_REQUEST, deleteAllTodo)
  ])
}

export function* watchLoginRequest() {
  yield takeEvery(authConstants.LOGIN_REQUEST, login)
}

export function* watchLogoutRequest() {
  yield takeEvery(authConstants.LOGOUT_REQUEST, logout)
}

export function* watchRegisterRequest() {
  yield takeEvery(authConstants.REGISTER_REQUEST, register)
}

export default function* rootSaga() {
  yield all([
    fork(watchFetchTodos),
    fork(watchPutTodo),
    fork(watchDeleteTodo),
    fork(watchLoginRequest),
    fork(watchLogoutRequest),
    fork(watchRegisterRequest)
  ])
}