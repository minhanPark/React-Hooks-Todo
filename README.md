# React-Hooks-Todo

리액트 Hooks와 styled-components를 통해서 만든 투두앱입니다.

![완성 모습](https://drive.google.com/uc?id=13hR5TzqYHO4bR-fZaCzCo07Rhmz8zScZ)

```js
// Context.js

import React, { useContext, useReducer } from "react";
import reducer, { initialState } from "./Reducer";

const todoContext = React.createContext();

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <todoContext.Provider value={{ state, dispatch }}>
      {children}
    </todoContext.Provider>
  );
};

export const useState = () => {
  const { state } = useContext(todoContext);
  return state;
};

export const useDispatch = () => {
  const { dispatch } = useContext(todoContext);
  return dispatch;
};

export default TodoContextProvider;
```

해당 코드를 보시면 만든 리듀서를 콘텐스를 통해서 각각의 컴포넌트에게 전달했습니다.  
또 state만 필요한 곳이 있고, dispatch만 필요한 곳이 있어서 useState함수와 useDispatch 함수로 각각 사용할 수 있도록 전달했습니다.

```js
// Reducer/actions.js

export const ADD = "add";
export const COMPLETE = "complete";
export const UNCOMPLETE = "uncomplete";
export const DELETE = "delete";
export const MODIFY = "modify";
export const UNMODIFY = "unmodify";
```

액션의 경우 6가지이고, 각각을 쉽게 불러올 수 있도록 액션을 모은 파일을 따로 만들었습니다.

```js
//Todo.js

import {
  COMPLETE,
  UNCOMPLETE,
  DELETE,
  MODIFY,
  UNMODIFY
} from "../Reducer/actions";
import { useDispatch } from "../Context";
```

사용해야하는 컴포넌트에는 위와 같은 형태로 불러왔습니다.

```js
//Todo.js

const handleModify = () => dispatch({ type: MODIFY, payload: id });
```

사용할 땐 위와 같은 방식으로 사용했습니다.  
[styled-components 사용법 보러가기](https://minhanpark.github.io/today-i-learned/how-to-use-styled-components/)  
styled-components를 사용한 이유는 환경을 구성하기도 쉽고, 위의 포스팅을 정리한 겸 연습 삼아서 사용했습니다.
