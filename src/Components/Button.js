import React from "react";
import styled from "styled-components";

const SButton = styled.button`
  font-size: 18px;
  margin: 8px;
  padding: 6px 12px;
  border: none;
  border-radius: 3px;
  background-color: ${props => props.color};
`;

const Button = ({ text, color, onClick }) => (
  <SButton color={color} onClick={onClick}>
    {text}
  </SButton>
);

export default Button;
