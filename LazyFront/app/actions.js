import { ON_ERROR, REQUEST_START, REQUEST_SUCCESS, MESSAGE } from './constants';

function action(type, payload) {
    return { type, ...payload };
}

export const showError = (message) => action(ON_ERROR, { message });
export const showMessage = (message) => action(MESSAGE, { message });
export const requestStart = () => action(REQUEST_START);
export const requestSuccess = () => action(REQUEST_SUCCESS);


