# 18. Pagination : Feedback

## HTML/CSS

### 1. Gridbox 의 Gap 설정
- grid-gap, column-gap 등이 삭제줄 처리로 표현되었다. 정답처럼, {gap: 10px} 으로만 부여해도 정상적용이 되는 것 같다.


## JS/React

### 0. 파일구성
- 컴포넌트의 구성은 동일했다. API 데이터를 처리하는데 있어, fetch를 담당하는 useFetch(useFetch.js)와 이 data 배열을 2차원 배열로 만드는 paginate 함수(utils.js) 두 가지를 별도로 설계한 차이점이 있다.

### 1. useFetch.js / fetchData 기능을 별도 구현
데이터 fetch 기능을 별도로 담당한 useFetch() 메서드가 포함되어 있다.
반환값은 loading, data 두가지로, 특히 data는 paginate() 메서드를 통해 2차원으로 가공한다.

### 2. utils.js / 배열의 2차원 처리와 Array.from()

const paginate = (followers) => {
  const itemsPerPage = 10
  const numberOfPages = Math.ceil(followers.length / itemsPerPage)

  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage
    return followers.slice(start, start + itemsPerPage)
  })

  return newFollowers
}

export default 
