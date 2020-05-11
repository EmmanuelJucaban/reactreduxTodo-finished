import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer';
import counterReducer from './counterReducer';
import todosReducer from './todosReducer';

import { ADD_TODOS_SUCCESS } from '../actions/types';

export default combineReducers({
  counter: counterReducer,
  auth: authReducer,
  todos: todosReducer,
  form: formReducer.plugin({
    userTodos: (state, action) => {
      switch (action.type) {
        case ADD_TODOS_SUCCESS:
          return undefined;
        default:
          return state;
      }
    }
  }),
});
