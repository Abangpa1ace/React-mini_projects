# 14. Cart(useContext, useReducer) : Feedback

## HTML/CSS

### 1. 너비, 높이값 수식적용
- min-height: calc(100vh - 120px);
이러한 계산식으로 설정하는 방법도 있는 것을 확인했다.



## JS/React

### 0. 파일구성

- index.js 에선, <App />을 <AppProvider> 로 감싸서 Context를 적용했다.
- <App />에선, <Navigation />, <Cart /> 받아오는 것 외엔 자체적으로 구성했다.
empty-msg 를 <Cart />에서 표현하기에, <Loader /> 를 구지 따로 안만들어도 되긴 했다.
- context.js 에선 useReducer 설정을 하고, API패치와 state 관리 및 dispatch 를 활용한 이벤트 핸들러 함수들을 제작했다. 
- reducer.js 는 useReducer 의 reducer 함수 제작에 초점을 두고 있다.
각 액션타입(조건문)에 따라, state를 가공하고 반환하는 구체적인 로직을 작성했다.

### 1. context.js / useContext() Hooks

1) useContext 를 import 한다.
import React, { useEffect, useContext, useReducer } from 'react';

2) Context를 선언한다.
const AppContext = React.createContext();

3) Provider를 선언한다.
const AppProvider = ({children}) => {
  ......(메소드, useEffect, useReducer 정의 등)

  return (
    <AppContext.Provider value={{~}}>
      {children}
    </AppContext.Provider>
  )
}

4) Consumer를 대체하는 useContext 를 활용한다. 다른 컴포넌트에서 키값을 이 export된 useGlobalContext 로부터 받아올 수 있다.

export const useGlobalContext = () => {
  useContext(AppContext)
}

5) Context, Provider 를 export 한다. Context는 useGlobalContext 지원, Provider는 index.js에서 <App /> 컴포넌트를 감싸는 용도로 활용된다.

export { AppContext, AppProvider }

### 2. reducer.js / useReducer() Hooks

useReducer 역시 전역상태 관리에 이점이 있으며, Redux 처럼 다양한 액션타입에 따라 다른 동작을 할 때 유용한 기능이다.

- useReducer 설정

const [state, dispatch] = useReducer(reducer, initialState)
   - state : 전역상태를 의미(실시간)
   - dispatch : 전역상태를 조정하는 메소드(세터함수와 유사)
   - reducer : reducer 함수, action.type에 따라 dispatch 의 세부로직을 작성
   - initialState : state의 최초값을 기입

- reducer 함수 설정

const reducer = (state, action) => {
  switch (action.type) {
    case 'inc': 
      return ~

    case 'dec':
      return ~
  }
}
   - state : 전역상태
   - action : dispatch 함수에서 하달받는 객체값. type, payload 등을 키값으로 설정한다.
   - 통상 action.type에 따라 변하므로, switch 조건문을 사용한다.

### 3. reducer.js / throw

예외(프로그램 실행중 발생오류) 발생시 특정 표현식을 반환한다.

이전에, 패치의 경우엔 try-catch 양분화를, 여기서처럼 다양한 조건문은 throw로 예외처리를 했다.
