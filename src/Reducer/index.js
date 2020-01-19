import uuid from "uuid/v4";
import { ADD, COMPLETE } from "./actions";

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
      const targetTodo = state.todos.find(todo => action.payload === todo.id);
      const restArr = state.todos.filter(todo => todo.id !== action.payload);
      return {
        todos: [...restArr, { ...targetTodo, completed: true }]
      };
    default:
      return;
  }
};

export default reducer;
