# 17. Random Person : Feedback

## HTML/CSS

### 1. <textarea> 태그의 사용
state 설



## JS/React

### 0. 파일구성
- 간단하게, App.js 에서 state 와 컴포넌트 구현이 가능했다.


### 1. App.js / state 의 차이

위의 'name'과 밑의 '이름값'을 2가지 state 로 각각 지정했다. 개인적으로 난 내 방법이 나은 것 같다.

### 2. App.js / onMouseEnter 이벤트 리스너 처리

문제에서는 onMouseEnter 이벤트 리스너를 내가 초기에 원했던것처럼, data-label(나는 name)을 인용했다.
여기서 문제는, e.target 이 button 외에 svg나 div 가 되는 문제가 있는데, 이를 조건문으로 해결했다. (내가 고민하던 parentNode 나 DOM셀렉터가 무의미했음을 확인한 내용)

const handleValue = (e) => {
  if (e.target.classList.contains('icon')) {
    const newValue = e.target.dataset.label
    setTitle(newValue);
  }
}