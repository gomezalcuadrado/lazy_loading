import { createSelector } from 'reselect';

/**
 * Direct selector to the dataProcessing state domain
 */
const selectDataProcessingDomain = (state) => state.get('dataProcessing');

/**
 * Other specific selectors
 */


/**
 * Default selector used by DataProcessing
 */

const makeSelectDataProcessing = () => createSelector(
  selectDataProcessingDomain,
  (substate) => substate.toJS()
);

export default makeSelectDataProcessing;
export {
  selectDataProcessingDomain,
};
