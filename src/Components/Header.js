import React from "react";
import styled from "styled-components";
import { Colors } from "../Constants";

const HeaderBg = styled.div`
  width: 100%;
  background-color: ${Colors.HeaderBg};
  margin: 0;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const HeaderText = styled.h1`
  margin: 0;
  color: ${Colors.White};
  text-align: center;
  font-weight: 700;
  font-size: 36px;
`;

const Header = () => {
  return (
    <HeaderBg>
      <HeaderText>To Do App</HeaderText>
    </HeaderBg>
  );
};

export default Header;
