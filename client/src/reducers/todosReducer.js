import {
  GET_ALL_TODOS,
  GET_ALL_TODOS_ERROR,
  GET_USER_TODOS,
  ADD_TODOS_ERROR,
  ADD_TODOS_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  todo: { id: '', text: '', completed: ''},
  todos: [],
  userTodos: [],
  userTodosError: '',
  getAllTodosError: '',
  addTodosError: ''
};


export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_TODOS:
      return {...state, todos: action.payload, getAllTodosError:'' };
    case GET_ALL_TODOS_ERROR:
      return {...state, todos: action.payload };
    case GET_USER_TODOS:
      return {...state, userTodos: action.payload,  userTodosError: '' };
    case ADD_TODOS_SUCCESS:
      return {...state, addTodosError: '' };
    case ADD_TODOS_ERROR:
      return {...state, addTodosError: action.payload };
    default:
      return state;
  }
}
