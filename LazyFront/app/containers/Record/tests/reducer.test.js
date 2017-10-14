
import { fromJS } from 'immutable';
import recordReducer from '../reducer';

describe('recordReducer', () => {
  it('returns the initial state', () => {
    expect(recordReducer(undefined, {})).toEqual(fromJS({}));
  });
});
