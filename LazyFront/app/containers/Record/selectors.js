import { createSelector } from 'reselect';

/**
 * Direct selector to the record state domain
 */
const selectRecordDomain = (state) => state.get('record');

/**
 * Other specific selectors
 */

/**
 * Default selector used by Record
 */

const makeSelectRecord = () => createSelector(
  selectRecordDomain,
  (substate) => substate.toJS()
);

export default makeSelectRecord;
export {
  selectRecordDomain,
};
