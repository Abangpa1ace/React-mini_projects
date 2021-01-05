# 20. Dark Mode : Feedback

## HTML/CSS

### 1. 변수설정의 중요성
- 나는 .App, .App.dark 두 경우에서 각각 스타일링을 했지만, 정답은 각 모드에서 변수의 할당값만 바꾸면서 전환을 했다.


## JS/React

### 0. 파일구성
- 컴포넌트의 구성은 동일했다.

### 1. App.js / localstorage() 숙달
- 컴포넌트 밖에서, getItem('key')을 함수에 담아(if 조건문 - 존재하는지?) 처리하며 이 값을 반환해야 한다.
- 초기 세팅 시, useState(함수())로 하면 가져온 값을 바로 초기 state로 설정할 수 있다.
- setItem('key', state)은, dependency array에 [state]를 넣어주며 리렌더링과 함께 로컬 저장소 최신화도 진행

### 2. lorem.js / moment.js 및 format 활용
- moment.js 를 설치하여, 인자로 날짜를 지정한 뒤 원하는 포멧 형태를 적용하면 된다.
현재는 개발지원을 중단한 상태로, Day.js 등 차선책을 사용해야 한다.

import moment from 'moment';

<span>{moment(date).format('dddd Do, YYYY')}</span>
