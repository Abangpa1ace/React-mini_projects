# 04. Accordion : Feedback

## HTML/CSS

### 1. Grid box
flex 못지 않게 많이 쓰이는 정렬 형태이다. (flex 는 1차원, grid 는 2차원)
기본적으로, {display: grid;} 설정 후 사용하면 됨.

* grid-templates-column/row : 기본 배치형태. repeat(횟수, 사이즈)로 반복할수도 있다.
  - grid-template-column: 200px 200px;
  - grid-template-row: repeat(2, 1fr); // fr(frame)은 flex: 1 과 유사

* gap(row-gap, column-gap): 그리드 박스 사이 간격 설정
  - gap: 10px 20px; // row, column 순

* place(justify, align)-items : 그리드 박스들의 정렬방법. 사이즈가 다른 요소들 정렬에 유용할 듯.
  - justify-items: start, center, end;
  - 아이템 그룹은(justify-contents), 자식요소에선(justify-self) 도 있다.

* 이외에도, grid-auto-column(배치 자동정의), order(자식요소 순서) 등 속성들이 있다.


  

## JS/React

### 0. 파일구성
App.js 에 <Navbar /> 와 <Menu /> 2개 컨테이너가 포함된다. <Menu /> 안에서 아이템들을 map 처리.
<Navbar /> 에도 이벤트 핸들러가 들어가니까 컴포넌트로 분류한다는 발상을 해야겠다!
state는 menuItems, categories 두 가지를 사용했다. 

### 1. App.js / Set() 자료형
중복되지 않는 카테고리를 위해, forEach + includes를 돌렸는데, Set() 자료형을 쓰면 간단하다.

* Set() : 중복이 불가능한 데이터 집합의 자료형 (ES6)
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

### 2. App.js / categories state
categories state도 있다(setCategories를 하진 않음). 이유는... 고민해봐야겠다.