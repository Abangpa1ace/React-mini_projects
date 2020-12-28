# 15. Cocktails : Feedback

## HTML/CSS

### 없음



## JS/React

### 0. 파일구성

- 먼저 개발환경 설정을 짚고 넘어가자.
pages 폴더엔 페이지 컴포넌트들을, components 폴더에는 기능별 요소 컴포넌트들이 들어간다.
올바른 구조는, <Navbar>같이 중복되는 컴포넌트 외에는, pages의 각 페이지 별 폴더를 만들어 거기에 필요한 컴포넌트를 포함시키는 게 옳다. CSS 역시, 각각의 폴더의 CSS파일로 만드는 게 맞다.

- index.js 에선, <App />을 <AppProvider> 로 감싸서 Context를 적용했다.
- App.js 에선, <Router> 및 <Switch> 를 활용한 url에 따른 각 페이지들을 표현했다.
또한, <Navbar> 같이 중복되는 컴포넌트들을 여기에 써주는게 훨씬 효율적일 것이다.
(컴포넌트의 구성보다는, 각 페이지의 JS파일 생성 및 디렉토리 구성에 대해 배우는 과제였다.)


### 1. App.js / React-Router 사용

1) React-Router API import. BrowserRouter, Route 는 라우팅의 부모, 자식개념
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

2) 라우팅 컴포넌트의 리턴값. <Router> 부모 태그로 감싸고, <Route> 에 path props로 url을 부여한다. <Switch> 는 해당 path에 따라 각기 다른 페이지 컴포넌트들을 view 해준다.
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/cocktail/:id">
        <SingleCocktail />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  </Router>

3) Link API로 링크 설정(<a>태그와 달리 리렌더링 없음). 링크를 연결할 <li>, <button> 등에 적용
  <nav className='navbar'>
    <div className='nav-center'>
      <Link to='/'>
        <img src={logo} alt='cocktail db logo' className='logo' />
      </Link>
      <ul className='nav-links'>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/about'>about</Link>
        </li>
      </ul>
    </div>
  </nav>

### 2. context.js / useCallback() Hooks

useCallback(function, [dependency])은 최적화를 위한 Hooks 이다.
리랜더링 시 해당 함수의 재선언을 취소하여, 무거운 함수의 불필요한 재가동을 최소화하는 것이다.
(리턴값을 기억하는 useMemo Hooks도 존재한다.)

- useCallback 활용 : 사용하고자 하는 함수의 우변에서 함수를 감싼다.
[dependency array] 값의 변화가 없다면, 해당 함수의 재발생은 차단된다.

const fetchDrinks = useCallback( async () => {
  ~