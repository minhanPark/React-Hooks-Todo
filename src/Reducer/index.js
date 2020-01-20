import uuid from "uuid/v4";
import { ADD, COMPLETE, UNCOMPLETE, DELETE, MODIFY, UNMODIFY } from "./actions";

export const initialState = {
  todos: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        todos: [
          ...state.todos,
          {
            id: uuid(),
            text: action.payload,
            completed: false,
            modified: false
          }
        ]
      };
    case COMPLETE:
      const completedTodo = state.todos.find(
        todo => action.payload === todo.id
      );
      return {
        todos: [
          ...state.todos.filter(todo => todo.id !== action.payload),
          { ...completedTodo, completed: true }
        ]
      };
    case UNCOMPLETE:
      const uncompletedTodo = state.todos.find(
        todo => action.payload === todo.id
      );
      return {
        todos: [
          ...state.todos.filter(todo => todo.id !== action.payload),
          { ...uncompletedTodo, completed: false }
        ]
      };
    case DELETE:
      const undeletedArr = state.todos.filter(
        todo => todo.id !== action.payload
      );
      return {
        todos: [...undeletedArr]
      };
    case MODIFY:
      const modifiedTodo = state.todos.find(todo => todo.id === action.payload);
      const arrIndex = state.todos.findIndex(i => i.id === modifiedTodo.id);
      return {
        todos: [
          ...state.todos.slice(0, arrIndex),
          { ...modifiedTodo, modified: true },
          ...state.todos.slice(arrIndex + 1)
        ]
      };
    case UNMODIFY:
      const unmodifiedTodo = state.todos.find(
        todo => todo.id === action.payload.id
      );
      const arrayIndex = state.todos.findIndex(i => i.id === unmodifiedTodo.id);
      return {
        todos: [
          ...state.todos.slice(0, arrayIndex),
          { ...unmodifiedTodo, modified: false, text: action.payload.text },
          ...state.todos.slice(arrayIndex + 1)
        ]
      };
    default:
      return;
  }
};

export default reducer;
