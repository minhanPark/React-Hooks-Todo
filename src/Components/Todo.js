import React from "react";
import styled, { css } from "styled-components";
import { Colors } from "../Constants";
import Button from "./Button";
import { COMPLETE } from "../Reducer/actions";
import { useDispatch } from "../Context";

const SDiv = styled.div`
  background-color: ${Colors.White};
  padding: 8px;
  border-radius: 4px;
  margin-top: 15px;
`;

const SP = styled.p`
  width: 80%;
  margin: 0 auto;
  font-size: 20px;
  color: ${Colors.Black};
  ${props =>
    props.completed &&
    css`
      text-decoration: line-through;
    `}
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Todo = ({ id, text, completed, modified }) => {
  const handleComplete = () => {
    dispatch({ action: COMPLETE, payload: id });
  };
  const dispatch = useDispatch();
  return (
    <SDiv completed={completed}>
      <SP completed={completed} id={id}>
        {text}
      </SP>
      <ButtonContainer>
        <Button text="완료" color="#1B9CFC" onClick={handleComplete} />
        <Button text="수정" color="#FEA47F" />
        <Button text="삭제" color="#FC427B" />
      </ButtonContainer>
    </SDiv>
  );
};

export default Todo;
