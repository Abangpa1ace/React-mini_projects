# 04. Accordion : Feedback

## HTML/CSS

### 없음
  

## JS/React

### 0. 파일구성
App.js 에서 container를 두 개 만들지 않았다. 그냥 <section> 태그 안에서 <Quiz /> map으로 구현.
또한, more 역시 각 quiz의 state로 구현했다. (따라서, data 배열 편집은 불필요)

### 1. question.js / 이벤트 리스너 간단한 boolean 처리
이처럼, !showInfo 를 반환하면, true/false 전환을 손쉽게 구현할 수 있다.

<button className='btn' onClick={() => setShowInfo(!showInfo)}>
