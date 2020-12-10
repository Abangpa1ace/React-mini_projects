# 07. Slider : Feedback

## HTML/CSS

### 1. Slider 만들기 : position, transition(translateX + opacity)

* 부모요소에는, {position: relative}, {overflow: hidden} 부여! relative 때문에 width/height 값 필요
.review-container {
  position: relative;
  width: 860px;
  height: 500px;
  margin: 0px 30px;
  display: flex;
  overflow: hidden;
}

* 자식요소는, 전체적으로 {position: absolute}, width/height 100%, left/top 0, {opacity: 0} 을 준다.
.review {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-size: 18px;
  transition: all .3s ease;
  opacity: 0;
}

* activeSlide 만 opacity 1, translateX(0)
  lastSlide -> translateX(-100%), nextSlide -> translateX(100%)
.review.activeSlide {
  opacity: 1;
  transform: translateX(0);
}
.review.lastSlide {
  transform: translateX(-100%);
}
.review.nextSlide {
  transform: translateX(100%);
}

각각의 슬라이드 클래스는 기본적으로 nextSlide, React의 index 조건에 따라 activeSlide, lastSlide 를 부여한다. (JS/React 1번 참고)



## JS/React

### 0. 파일구성
App.js 에서 전체를 구현했다. <Review /> 컴포넌트를 분리했다가 (peopleIndex, index) 비교를 위해 props가 증가하는 역효과가 발생했다.

### 1. Review.js / Slider 만들기(index 따른 class 부여)
index(state)와 peoples의 index 들을 비교하여, map 처리간 클래스를 부여한다.

// 1) 기본은 nextSlide
let position = 'nextSlide';
// 2) index와 같아야 activeSlide
if (peopleIndex === index) {
  position = 'activeSlide'
}
// 3) index-1과 같거나, index 0일 때 배열길이-1 과 같을 때
if (
  peopleIndex === index - 1 ||
  (index === 0 && peopleIndex === people.length - 1)
) {
  position = 'lastSlide';
}


### 2. App.js / index(state)의 오류 방지
useEffect 와 setIndex 세터함수로 좌우로 초과할 때 순환시킬 수 있다.

useEffect(() => {
  const lastIndex = peoples.length - 1;
  // 좌측으로 초과 -> 오른쪽 끝으로
  if (index < 0) {    
    setIndex(lastIndex);
  }
  // 우측으로 초과 -> 왼쪽 끝으로
  if (index > lastIndex) {
    setIndex(0);
  }
}, [index, peoples]);   // index 변화, peoples 데이터 변화에 dependency


### 3. App.js / React의 setInterval 처리
index(state)를 일정 주기로 증가시키는 setInterval 함수를 설정하였다.
하지만, 이것만 사용하면 state 변화에 따라 페이지가 re-render 되고, 인터벌이 중첩/누적되게 된다.
그렇기 때문에, return (() => useEffect 와 {clearInterval(interval)}) 처리로 이전 인터벌을 삭제해야하며, dependency 로 매 주기마다 증가하는 index를 설정하는 것이다. 

useEffect(() => {
  const indexInterval = setInterval(() => {
    setIndex(index + 1);
  }, 5000);
  return () => clearInterval(indexInterval)
}, [index])


#### 총평 : index(state)를 통해 활성화를 제어했는데, 여기서 setIndex 세터함수를 적극적으로 활용해야겠다. onClick 시 가감 및 인터벌 증가 외에도, useEffect 감지를 통한 순환처리도 가능함을 알았다. 