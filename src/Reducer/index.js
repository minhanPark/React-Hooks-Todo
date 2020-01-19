import uuid from "uuid/v4";
import { ADD } from "./actions";

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
    default:
      return;
  }
};

export default reducer;
