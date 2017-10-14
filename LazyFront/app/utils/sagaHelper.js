import { call, put } from 'redux-saga/effects';
import { requestStart, requestSuccess, showError } from '../actions';

export function* invoke(service, ...args){
    try {
        yield put(requestStart());
        const response = yield call(service, ...args);
        yield put(requestSuccess());
        return response || 'ok';
    } catch (error) {
        const msg = error instanceof TypeError ?
        `Ups! Something went wrong: ${error.message}, Just try again...` : error;
        yield put(showError(msg));
        return 'error';
    }
}