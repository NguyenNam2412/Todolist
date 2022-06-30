import { authConstants } from '../constants/auth.constants';

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: authConstants.SUCCESS, payload: message };
}

function error(message) {
    return { type: authConstants.ERROR, payload: message };
}

function clear() {
    return { type: authConstants.CLEAR };
}