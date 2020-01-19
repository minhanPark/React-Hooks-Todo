import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../Constants";
import { useDispatch } from "../Context";
import { ADD } from "../Reducer/actions";

const SForm = styled.form`
  border-bottom: 2px solid ${Colors.White};
  padding: 4px;
  display: flex;
`;

const SInput = styled.input`
  border: none;
  background-color: ${Colors.Bg};
  outline: none;
  font-size: 20px;
  color: ${Colors.White};
  flex: 1;
  &::placeholder {
    color: ${Colors.White};
    opacity: 1;
  }
`;

const SIcon = styled.span`
  font-size: 32px;
  padding: 6px;
  color: ${Colors.White};
  cursor: pointer;
`;

const TodoInput = () => {
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  const handleInput = e => {
    const {
      target: { value }
    } = e;
    setState(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (state.length !== 0) {
      dispatch({ type: ADD, payload: state });
      setState("");
    }
  };
  const handleClick = e => {
    if (state.length !== 0) {
      dispatch({ type: ADD, payload: state });
      setState("");
    }
  };
  return (
    <SForm onSubmit={handleSubmit}>
      <SInput
        placeholder="write your Todo"
        value={state}
        onChange={handleInput}
      />
      <SIcon onClick={handleClick}>+</SIcon>
    </SForm>
  );
};

export default TodoInput;
