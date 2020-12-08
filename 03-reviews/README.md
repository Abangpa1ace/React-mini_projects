# 02. Tours : Feedback

## HTML/CSS

### 1. <Tour /> 의 div 구성 참고
먼저 위 img, 아래 footer 양분. 다시 footer는, div + p + button.
첫 div에 제목과 tour-price를 같이 넣고 space-between을 줬다. (동일했음)
나머지도 동일하며, Read More 관련해선 JS/React 4번에서 리뷰함!
  

## JS/React

### 0. 파일구성
App.js 에서 두 가지 예외처리를 하였다.(if ~ return())
1) 로딩중, 2) tours.length ===0 이면 fetch함수 실행하는 refresh 버튼

loading 상태도 하나의 state(bool)으로 설정했고, fetch 함수 시작에 true / 끝에 false 지정한다.

제목 및 리스트는 모두 <Tours /> 컴포넌트에, 각 요소들은 다시 <Tour /> 컴포넌트로 map했다.

### 1. App.js / 비동기 함수 예외처리 참고
async/await 함수를 통해, API fetch 비동기 처리를 용이하게 할 수 있다.(ES7 지원)
그 장점 중 하나는, catch를 통한 예외처리에 있다. 동기/비동기 상관없이 적용가능.
try는 기존의 await 처리를, catch(error)는 에러발생 시 확인용이다.
* 기존 Promise는 어느 .then()에서 발생했는지 불명확하다는 단점이 있다.

const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

### 2. App.js / 함수형 컴포넌트 조건부 랜더링
이처럼, loading 중이거나 tours를 잘못 받아오는 예외들에 대해 if ~ return() 을 사용한다.

if (loading) {
  return (
    <main>
      <Loading />
    </main>
  )
}
if (tours.length === 0) {
  return (
    <main>
      <div className='title'>
        <h2>no tours left</h2>
        <button className='btn' onClick={() => fetchTours()}>
          refresh
        </button>
      </div>
    </main>
  )
}
return (
  <main>
    <Tours tours={tours} removeTour={removeTour} />
  </main>
)

### 3. Tours.js / Object props 하달방법

tour={tour} 로 안내리고, 각각의 요소별로 props를 내렸다.
Tour에서 별도 const 처리는 줄어드나, 컴포넌트 인자에 각각 추가해야되니 조삼모사인듯?

return <Tour key={tour.id} {...tour} removeTour={removeTour} />

### 4. Tour.js / Read More 만드는 방법

아... 구지 info를 양분할 필요가 없었다. info 전체 혹은 200자 + ... 으로 간단한 삼항연산자 구현도 가능했다! 
(substring(stridx, endidx) 사용은 동일)

{readMore ? info : `${info.substring(0, 200)}...`}
