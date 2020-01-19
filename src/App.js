import React from "react";
import TodoContextProvider from "./Context";
import Header from "./Components/Header";

function App() {
  return (
    <TodoContextProvider>
      <div className="App">
        <Header />
      </div>
    </TodoContextProvider>
  );
}

export default App;
