# 08. Lorem Ipsum : Feedback

## HTML/CSS

### 1. 글자 자간, 줄간격 조절 : letter-spacing, line-height


## JS/React

### 0. 파일구성
App.js 및 하위 컴포넌트로는 <List /> 와 <Alert /> 를 사용했다. 
<Alert /> 에서 alert(state) 의 type, msg 속성으로 디자인 및 값 설정을 했고, useEffect를 통한 setTimeout 처리까지 했다.
<List />는 App.js에서 map 처리했는데, length > 0 일 때 <List /> 및 clear-btn 표현조건을 같이 걸 수 있는 강점이 있다.

### 1. Alert.js / alert 창 표현방법
alert(state) 를 객체형태로 설정했다. ({show: false, msg: '', type: ''}) 
Alert.js 에서는, type / msg / removeAlert / list 네 개의 props를 받았으며,
type - css, msg - 내용, removeAlert - setTimeout 표현, list - dependency 역할을 맡았다.
useEffect 및 setTimeout을 여기서 실행했고, show: true 후 3초 뒤 removeAlert(-> show: false) 로 처리했다.

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};


### 2. List.js / 부모의 props가 2개 vs 자식의 메소드가 2개
나는 handleClick props와 clickEdit/clickErase 두 개 메소드를 활용했다.
정답은 removeItem, editItem 두 개의 props를 하달하고, 각각의 버튼에 지정했다. 좀 더 직시적인 처리인 것 같다.


### 3. App.js / state 설정 방법
나와 유사하게, input value / item-list / mode(edit) / beforeEdit(editID) / alert 다섯 가지로 설정했다.
우선, mode보다는 isEditing(bool) 로 edit 여부만 파악했고, 모드별 구현은 alert(state)를 객체로 운용하면서 구체적으로 설정하였다.
editID 는 beforeEdit 과 비슷하며, 단어가 아닌 id(변경하지 않는 값)로 파악했다는 차이가 있다.

const [name, setName] = useState('');
const [list, setList] = useState(getLocalStorage());
const [isEditing, setIsEditing] = useState(false);
const [editID, setEditID] = useState(null);
const [alert, setAlert] = useState({ show: false, msg: '', type: '' });


### 4. App.js / onSubmit 이벤트 처리방법

1) 먼저, if (!name) 를 줘서, input 안에 아무것도 없는 경우를 파악했다.

2) else(add 모드) : newItem을 list에 추가했다. list 각 요소들은, {id: 일시, title: name} 객체 형태로 저장되었다.

3) else if(edit 모드) : list.map 처리를 했고, edit 모드에서 기억해둔 editID 와 item.id 가 같은 경우만 수정했다.

setList(
  list.map((item) => {
    if (item.id === editID) {
      return { ...item, title: name };
    }
    return item;
  })


### 5. App.js / edit, delete 모드 제작방법

모든 제어는 list의 id 속성에 따라 제어되었다.
delete는 동일하게 filter(!==) 처리, edit은 find(===) 처리를 통해 대상요소의 id(editID), title(input값) 처리했다.


### 6. App.js / localStorage() 저장/불러오기

- 불러오기 및 state 설정 -> list(state) 초기값을 getLocalStorage() 로 설정한 이유이다.

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};

- 저장 -> list가 변할 때마다, local에 저장하는 유용한 useEffect 활용방법인 것 같다.

useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);