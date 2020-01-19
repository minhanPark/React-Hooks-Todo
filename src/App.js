import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import TodoContextProvider from "./Context";
import Header from "./Components/Header";
import TodoInput from "./Components/TodoInput";
import { Colors } from "./Constants";
import TodoContainer from "./Components/TodoContainer";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    height: 100%;
    background-color: ${Colors.Bg};
  }
`;

const Wrapper = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  margin-top: 30px;
  padding: 10px;
  box-sizing: border-box;
`;

function App() {
  return (
    <TodoContextProvider>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Wrapper>
          <TodoInput />
          <TodoContainer />
        </Wrapper>
      </div>
    </TodoContextProvider>
  );
}

export default App;
