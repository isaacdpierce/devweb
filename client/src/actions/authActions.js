import { TEST_DISPATCH } from './types';

// Redux action creator - to be dispatched to the reducer
export const registerUser = userData => {
  return {
    type: TEST_DISPATCH,
    payload: userData
  };
};
