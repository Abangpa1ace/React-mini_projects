# 08. Lorem Ipsum : Feedback

## HTML/CSS

### 없음



## JS/React

### 0. 파일구성
App.js 에서 <Navbar /> 컴포넌트를 받았다. links, social 데이터는 <Navbar /> 에서 바로 import.

### 1. Navbar.js / useRef() Hooks
useRef 는 특정 DOM을 참고할 때 사용되는 Hooks 이다. current에 최근 지정한 DOM을 저장한다.

import React, { useRef } from 'react';

function App() => {
  // 1) colorChange 라는 useRef 변수를 생성
  const colorChange = useRef(null);
  // 2) 이벤트 핸들러에서, colorChange ref의 스타일 변경
  const handleChange = () => {
    colorChange.current.style = "background: red"
  }

  return (
    <>
    // 3) 대상 DOM의 ref엔 colorChange(useRef 변수) 지정
      <div ref={colorChange} style={{background: 'blue'}}>
      <button onClick={handleChange}>Ref</button>
    <>
  )
}
