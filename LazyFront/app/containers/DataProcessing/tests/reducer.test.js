
import { fromJS } from 'immutable';
import dataProcessingReducer from '../reducer';

describe('dataProcessingReducer', () => {
  it('returns the initial state', () => {
    expect(dataProcessingReducer(undefined, {})).toEqual(fromJS({}));
  });
});
