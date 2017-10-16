/*
 *
 * DataProcessing reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SAVE_CASES
} from './constants';
import {
  REQUEST_START,
  REQUEST_SUCCESS
} from '../../constants';

const initialState = fromJS({"cases" : null, showLoader: false});

function dataProcessingReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SAVE_CASES:
      return state.set("cases", action.cases);
    case REQUEST_START:
      return state.set("showLoader", true);
    case REQUEST_SUCCESS:
      return state.set("showLoader", false);
    default:
      return state;
  }
}

export default dataProcessingReducer;

