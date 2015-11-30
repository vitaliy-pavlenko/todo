import * as types from '../constants/ActionTypes';
import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';

const initialState = {
  todos: [1, 2, 3],
  todosById: {
    1: {
      id: 1,
      command: 'npm install'
    },
    2: {
      id: 2,
      command: 'npm start'
    },
    3: {
      id: 3,
      command: 'open http://localhost:3000'
    }
  }
};

export default function todos(state = initialState, action) {
  switch (action.type) {

    case types.ADD_TODO:
      const newId = state.todos[state.todos.length - 1] + 1;
      return {
        ...state,
        todos: state.todos.concat(newId),
        todosById: {
          ...state.todosById,
          [newId]: {
            id: newId,
            command: action.command
          }
        },
      }

    case types.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(id => id !== action.id),
        todosById: omit(state.todosById, action.id)
      }

    case types.DONE_TODO:
      return {
        ...state,
        todosById: mapValues(state.todosById, (item) => {
          return item.id === action.id ?
            assign({}, item, { done: !item.done }) :
            item
        })
      }

    default:
      return state;
  }
}
