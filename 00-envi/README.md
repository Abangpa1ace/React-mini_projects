# 08. Lorem Ipsum : Feedback

## HTML/CSS

### 1. 글자 자간, 줄간격 조절 : letter-spacing, line-height


## JS/React

### 0. 파일구성
App.js 에서 전체를 구현했다. 딱히, <Paragraph /> 가 필요없긴 했다.

### 1. App.js / count(state) 관리 방법
나는 onChange 단계에서 최대값을 감지했는데, 정답은 onSubmit에서 조건을 걸었다. (<=0 이면 1, >8 이면 8)
이후, 이를 활용한 slice 처리. 결과적으로 메소드가 하나 줄어든 깔끔한 코드!

const handleSubmit = (e) => {
  e.preventDefault();
  let amount = parseInt(count);
  if (count <= 0) {
    amount = 1;
  }
  if (count > 8) {
    amount = 8;
  }
  setText(data.slice(0, amount));
};

### 2. App.js / <input value={state} 연결>
useEffect 와 setIndex 세터함수로 좌우로 초과할 때 순환시킬 수 있다.

<input
  type='number'
  name='amount'
  id='amount'
  value={count}
  onChange={(e) => setCount(e.target.value)}
/>


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