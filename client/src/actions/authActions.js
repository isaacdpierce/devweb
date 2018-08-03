import axios from 'axios';
import { GET_ERRORS } from './types';

// Redux action creator - to be dispatched to the reducer
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData) // Don't need https:// because it is in the proxy value in package.json
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
