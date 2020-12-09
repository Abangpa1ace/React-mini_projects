# 03. Reviews : Feedback

## HTML/CSS

### 1. place-items : grid 에서 item 정렬방법
grid box에서, justify-items + align-items 를 한번에 설정하는 속성이다.
동일하게, flex-start / flex-end / center / stratch 등 설정할 수 있다.

{ place-items: center center}
  

## JS/React

### 0. 파일구성
App.js 와 review.js 두 컴포넌트로 구성하는 간단한 프로젝트였다.

### 1. Review.js / prev, next, random 각각의 메소드
나는 하나의 메소드로 3개의 버튼을 제어했고, 각각의 반환값에 따른 if문을 실행했다.
정답에선 3개의 메소드를 따로 만들었고, 코드의 용량은 커지나 그만큼 정교함이 높아질 것으로 생각된다.

const nextPerson = () => {
  setIndex((index) => {
    let newIndex = index + 1;
    return checkNumber(newIndex);
  });
};
const prevPerson = () => {
  setIndex((index) => {
    let newIndex = index - 1;
    return checkNumber(newIndex);
  });
};
const randomPerson = () => {
  let randomNumber = Math.floor(Math.random() * people.length);
  if (randomNumber === index) {
    randomNumber = index + 1;
  }
  setIndex(checkNumber(randomNumber));
};

### 2. Review.js / 인덱스 예외처리
prev, next 에서는 - 혹은 + 한 뒤, checkNumber 함수로 초과여부를 검사했다.
random은 nextIndex를 랜덤하게 만들고, 인덱스와 같으면 그냥 index + 1 하는 간단한 처리를 했다.

const checkNumber = (number) => {
  if (number > people.length - 1) {
    return 0;
  }
  if (number < 0) {
    return people.length - 1;
  }
  return number;
};
