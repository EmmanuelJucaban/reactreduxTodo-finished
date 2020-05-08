import { GET_ALL_TODOS, GET_ALL_TODOS_ERROR } from '../actions/types';

const INITIAL_STATE = {
  todos: [ {id: '', text: '', completed: '', dateCreated: ''} ],
  userTodos: [ {id: '', text: '', completed: '', dateCreated: ''}],
  todo: { id: '', text: '', completed: ''},
  getAllTodosError: ''
};


export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_TODOS:
      return {...state, todos: action.payload };
    case GET_ALL_TODOS_ERROR:
      return {...state, todos: action.payload };
    default:
      return state;
  }
}
