import React from "react";
import styled from "styled-components";
import { Colors } from "../Constants";
import { useState, useDispatch } from "../Context";
import { ADD } from "../Reducer/actions";

const HeaderBg = styled.div``;

const HeaderText = styled.h1``;

const Header = () => {
  const state = useState();
  const dispatch = useDispatch();
  console.log(state.todos);
  return (
    <HeaderBg>
      <HeaderText>sdsdsd</HeaderText>
      <button onClick={() => dispatch({ type: ADD, payload: "테스트입니다." })}>
        버튼
      </button>
    </HeaderBg>
  );
};

export default Header;
