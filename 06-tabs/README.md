# 06. Tabs : Feedback

## HTML/CSS

### 1. border-left 의 다른 방법: box-shadow
{box-shadow: 0px -2px color} 로, 왼쪽에 선을 표현했다.



## JS/React

### 0. 파일구성
App.js 에서 전체를 구현했다. <aside>는 인덱스를 저장해서 하나의 컴포넌트로 분리해도 될 것 같다.

### 1. App.js / map() 메소드에서 index 넘기기
array.map((item, index) => return ~ ) 을 통해, 인덱스 값을 같이 넘길 수 있다. 
이에 따라, 활성화된 버튼에만 클래스를 부여할 수 있었다.

className={`job-btn ${index === value && 'active-btn'}`}