/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_EXECUTIONS } from './constants';
import { saveCases } from './actions';
import { invoke } from 'utils/sagaHelper';
import request from 'utils/request';
import api from 'api/lazyAPI';

/**
 * Github repos request/response handler
 */
export function* processFile() {
  // Select username from store
  const cases = yield call(invoke, api.processFile)
  yield put(saveCases(cases));
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* mainSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(PROCESS_FILE, processFile);
}

