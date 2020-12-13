# 12. Modal & Sidebar : Feedback

## HTML/CSS

### 없음



## JS/React

### 0. 파일구성
App.js 는 <Home />, <Modal />, <Sidebar > 세 가지로만 구성되어있다. 
이 컴포넌트들을 제어하는 context.js 가 따로 있고, 모든 open/close 기능이 집약된 useGlobalContext 메소드를 각 컴포넌트에서 사용한다. 여기에 useContext 개념이 쓰였다.

### 1. context.js / useContext() Hooks

* context API : 가까운 컴포넌트간의 상태공유는 props로 충분하나, depth가 깊어질 때 context API 를 사용해서 중간에 불필요한 개입을 없애게 된다. (Redux, Mobx 등 상태관리 라이브러리와 유사)

* useContext : context API 개념을 함수형 컴포넌트에 적용할 수 있는 Hooks. 부모를 Provider, 필요한 상태를 Consumer 설정을 통해 공유할 수 있다. 아래 사용순서 및 코드를 참고하자!

<사용순서>

[context.js]
1) react 라이브러리에서 useContext 훅을 import
- import React, { useState, useContext } from 'react';

2) context 객체를 생성한다.(괄호 안은 기본값) 이는 Consumer 설정에 사용된다.
- const AppContext = React.createContext();

3) Provider 메소드(AppProvider)를 생성한다. 여기에 state와 open/close 메소드가 들어간다. 리턴값은 Provider-{children} 으로 이루어져 있으며, value 에서 state 및 메소드 함수를 하달한다.
- [state] isSidebarOpen, isModalOpen / [method] openSidebar, closeSidebar, openModal, closeModal
- return (<AppContext.Provider value={{isSidebarOpen, isModalOpen, openModal, closeModal, openSidebar, closeSidebar,}}>{children}</AppContext.Provider>)

4) 메소드들을 export 한다. AppContext(생성), AppProvider(프로바이더) 및 useGlobalContext(상태관련 성질) 이 해당된다.
- export const useGlobalContext = () => { return useContext(AppContext); }
- export { AppContext, AppProvider }

5) [index.js] 부모 컴포넌트에선 <App />을 <AppProvier />로 감싼다.

6) [home.js] 자식 컴포넌트에선 useGlobalContext 를 통해서, 필요한 props 들을 가져올 수 있다.


[context.js]
import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };


[index.js]
import { AppProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


[home.js]
import { useGlobalContext } from './context';

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
  ...