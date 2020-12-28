# 16. Markdown Preview : Feedback

## HTML/CSS

### 1. <textarea> 태그의 사용
긴 문장을 입력하기 위해 이 태그를 사용했다. value={inputText} 할당을 잊지 말자!



## JS/React

### 0. 파일구성

- 간단하게, App.js 에서 state 와 컴포넌트 구현이 가능했다.


### 1. App.js / React Markdown

나는 inputText state 값을 마크다운으로 변환하기 위해, 무슨 split에 조건문에 별별 옵션을 추가했지만.
솔루션은 <ReactMarkdown> 설치해서 감싸기만 하면 되는것이엇.....하......

### 2. App.js / placeholder 와 유사?

<textarea> 태그의 value={inputVal} 로 설정한 건 state 동기화의 의미도 있지만,
이처럼 기본값을 '# Markdown preview'를 주면 마치 초기 placeholder 와 같은 효과도 볼 수 있다.