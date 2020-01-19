import React, { useContext, useReducer } from "react";
import reducer, { initialState } from "./Reducer";

const todoContext = React.createContext();

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <todoContext.Provider value={{ state, dispatch }}>
      {children}
    </todoContext.Provider>
  );
};

export const useState = () => {
  const { state } = useContext(todoContext);
  return state;
};

export const useDispatch = () => {
  const { dispatch } = useContext(todoContext);
  return dispatch;
};

export default TodoContextProvider;
