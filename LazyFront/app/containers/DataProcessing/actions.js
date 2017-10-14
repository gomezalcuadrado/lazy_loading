/*
 *
 * DataProcessing actions
 *
 */

import {
  DEFAULT_ACTION,
  PROCESS_FILE
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function processFile(document, file) {
  return {
    type: PROCESS_FILE,
    document,
    file
  };
}

export function saveCases(cases) {
  return {
    type: SAVE_CASES,
    cases
  };
}
