import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer';
import counterReducer from './counterReducer';
import todosReducer from './todosReducer';

export default combineReducers({
  counter: counterReducer,
  form: formReducer,
  auth: authReducer,
  todos: todosReducer
});
