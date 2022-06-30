import { authConstants } from '../constants/auth.constants';

export function alert(state = {}, action) {
  switch (action.type) {
    case authConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.payload
      };
    case authConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.payload
      };
    case authConstants.CLEAR:
      return {};
    default:
      return state
  }
}  