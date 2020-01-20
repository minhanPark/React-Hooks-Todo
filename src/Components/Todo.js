import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Colors } from "../Constants";
import Button from "./Button";
import {
  COMPLETE,
  UNCOMPLETE,
  DELETE,
  MODIFY,
  UNMODIFY
} from "../Reducer/actions";
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

const STextarea = styled.textarea`
  width: 80%;
  display: block;
  margin: 0 auto;
  font-size: 20px;
  color: ${Colors.Black};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const useValue = initialText => {
  const [value, setValue] = useState(initialText);
  return { value, setValue };
};

const Todo = ({ id, text, completed, modified }) => {
  const dispatch = useDispatch();
  const { value, setValue } = useValue(text);
  const handleText = e => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };
  const handleComplete = () => dispatch({ type: COMPLETE, payload: id });
  const handleUncomplete = () => dispatch({ type: UNCOMPLETE, payload: id });
  const handleDelete = () => dispatch({ type: DELETE, payload: id });
  const handleModify = () => dispatch({ type: MODIFY, payload: id });
  const hanldeUnmodify = (id, text) =>
    dispatch({ type: UNMODIFY, payload: { id, text } });

  if (modified) {
    return (
      <SDiv>
        <STextarea value={value} onChange={handleText} />
        <ButtonContainer>
          <Button
            text="확인"
            color="#1B9CFC"
            onClick={() => hanldeUnmodify(id, value)}
          />
        </ButtonContainer>
      </SDiv>
    );
  } else {
    return (
      <SDiv>
        <SP completed={completed} id={id}>
          {text}
        </SP>
        <ButtonContainer>
          {completed ? (
            <Button text="취소" color="#3B3B98" onClick={handleUncomplete} />
          ) : (
            <Button text="완료" color="#1B9CFC" onClick={handleComplete} />
          )}
          <Button text="수정" color="#FEA47F" onClick={handleModify} />
          <Button text="삭제" color="#FC427B" onClick={handleDelete} />
        </ButtonContainer>
      </SDiv>
    );
  }
};

export default Todo;
