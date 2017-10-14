/*
 *
 * Record actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_EXECUTIONS,
  SAVE_EXECUTIONS
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getExecutions() {
  return {
    type: GET_EXECUTIONS,
  };
}

export function saveExecutions(executions) {
  return {
    type: SAVE_EXECUTIONS,
    executions 
  };
}