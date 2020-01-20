import React from "react";
import styled from "styled-components";
import Todo from "./Todo";
import { useState } from "../Context";

const SDiv = styled.div`
  margin-top: 30px;
`;

const TodoContainer = () => {
  const state = useState();
  return (
    <SDiv>
      {state.todos &&
        state.todos.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            modified={todo.modified}
          />
        ))}
    </SDiv>
  );
};

export default TodoContainer;
