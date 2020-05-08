import { AUTH_USER, AUTH_ERROR } from '../types';
import axios from 'axios';

export const signUp = (formProps, callback) => async dispatch => {
  try {
    // Make a sign up request to the back end
    const { data } = await axios.post('/api/auth/signup', formProps);
    // the data will be an object that looks like { token: 'someJwT'}
    // Set this data to localStorage
    localStorage.setItem('token', data.token );
    dispatch({ type: AUTH_USER, payload: data.token });
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use. Please use a different email'});
  }
};


