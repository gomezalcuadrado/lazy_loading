/*
 *
 * Record reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SAVE_EXECUTIONS
} from './constants';

const initialState = fromJS({"executions":[]});

function recordReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SAVE_EXECUTIONS:
      return state.set("executions", action.executions);
    default:
      return state;
  }
}

export default recordReducer;
