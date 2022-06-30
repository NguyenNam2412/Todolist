import { authConstants } from '../constants/auth.constants';

export const authActions = {
  login,
  logout,
  register,
};

function login(username, password) {
  return {
    type: authConstants.LOGIN_REQUEST,
    payload: {username: username, password: password}
  }
}

function logout() {
  return {
    type: authConstants.LOGOUT_REQUEST
  }
}

function register(username, password) {
  return {
    type: authConstants.REGISTER_REQUEST,
    payload: {username: username, password: password}
  }
}