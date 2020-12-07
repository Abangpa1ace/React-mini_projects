# 01. Birthday Reminder : Feedback

## HTML/CSS

1. Circle 이미지 만들기(object-fit)
그냥 <img> 자체에 width/height/border-radius 준 다음 {object-fit: cover;} 를 주면 자동으로 맞춰진다.

* object-fit
  - none : 크기 상관없이 기본 알고리즘으로 가운데 정렬된다. (default)
  - fill : 지정된 너비 높이에 맞게 확대/축소된다.
  - contain : 본래 사진의 종횡비를 유지하며 축소된다. (긴 부분 기준, 여백생김)
  - cover : 본래 사진의 종횡비를 유지하며 축소된다. (짧은 부분 기준, 여백없음)
  - sclae-down : none 혹은 contain으로 자동 축소된다.

2. Button에 첫 글자만 대문자(text-transform)
통상, uppercase를 많이 썼다. 여기선, capitalize를 썼는데 첫 글자만 대문자가 되는 속성이다. (Clear All)

* text-transform
  - none : 없음(default)
  - uppercase : 대문자
  - lowercase : 소문자
  - capitalize : 첫 글자만 대문자
  

## JS/React

0. 파일구성
App.js 에서 대부분 구성하며, <List /> 컴포넌트만 따로 만듬. li 내부가 복잡해지면 ul과 li를 다시 상하 컨테이너로 분리해야겠다.
사람 목록을 data.js에 따로 저장한 뒤 import 하여 state(people)로 활용했다.

1. App.js / 이벤트 핸들러 설정
아래와 같이 바로 설정할 수 있다.(callback func.)

<button onClick={() => setPeople([])}>

2. list.js / 변수 받아오기
people 배열을 map 처리할 때, 각각의 요소이자 객체인 person의 인덱스를 const { index1, index2 } = Object; 형식으로 받아오도록 하자.

{people.map((person) => {
  const { id, name, age, image } = person;
  return (...)
}