import uuid from "uuid/v4";
import { ADD, COMPLETE, UNCOMPLETE } from "./actions";

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
    default:
      return;
  }
};

export default reducer;
