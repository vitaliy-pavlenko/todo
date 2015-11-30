import * as types from '../constants/ActionTypes';

export function addTodo(command) {
  return {
    type: types.ADD_TODO,
    command
  };
}

export function deleteTodo(id) {
  return {
    type: types.DELETE_TODO,
    id
  };
}

export function doneTodo(id) {
  return {
    type: types.DONE_TODO,
    id
  };
}
