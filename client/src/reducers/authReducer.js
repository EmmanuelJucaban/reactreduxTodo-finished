import { AUTH_USER, AUTH_ERROR } from '../actions/types';

const INITIAL_STATE = {
  authenticated: '',
  authError: ''
};


export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case AUTH_USER:
      // If everything went well, we set the authError back to nothing
      return {...state, authenticated: action.payload, authError: '' };
    case AUTH_ERROR:
      return {...state, authError: action.payload };
    default:
      return state;
  }
};
