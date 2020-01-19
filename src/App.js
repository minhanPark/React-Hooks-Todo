import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoContextProvider from "./Context";
import Header from "./Components/Header";
import { Colors } from "./Constants";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    height: 100%;
    background-color: ${Colors.Bg};
  }
`;

function App() {
  return (
    <TodoContextProvider>
      <GlobalStyle />
      <div className="App">
        <Header />
      </div>
    </TodoContextProvider>
  );
}

export default App;
