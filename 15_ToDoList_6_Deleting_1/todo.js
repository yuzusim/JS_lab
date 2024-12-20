const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// 새로고침을 하거나 이용자가 누구인가와 관계없이 똑같은 todo-list가 나온다면 우리는 todo-list를 그 때마다 계속해서 작성해야할 것
// list를 1,000개 작성했는데 단숨에 날라간다면...? 그건 어딘가 부족한 todo-list 일 거다. 그래서 우린 todo-list에 나타낸 텍스트를 저장하는 기능이 필요

// 1. todo - list의 배열 생성
// newTodo 그려질때마다 배열에 push 하고 싶어
// newTodo를 그리기 전 toDos 배열을 가져와서 newTodo를 push 할것
// const toDos = []; // toDos의 array을 로컬 스토리지에 저장하고 싶지만 로컬스토리지에 배열을 저장할 수 없음 -> 오직 텍스트만 가능!

// 업데이트
let toDos = []; 


// 저장 기능 추가 -> 저장 기능을 함수를 정의
// 로컬 스토리지에 저장 그걸 불러와서 화면에 그려줌.
function saveToDos() { // saveToDos의 역할 -> toDos의 array 내용을 로컬스토리지에 저장
    // localStorage.setItem("todos", toDos); 
    // -> 하지만 이렇게 저장하게 되면 직접 localStorage 에서 확인해봤을 때 값들이 array안에서 string의 형태가 아닌 상태로 저장
    // 예) key: todos value: a,b,c

    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // 하지만 우리는 값들을 string의 형태로 toDos라는 array에 집어넣고 싶기 때문에
    // JSON.stringify() 라는 객체를 사용, 우리가 대입한 값을 알아서 string의 형태로 바꿔줄 것
    // 데이터를 객체로 받으려는 이유는 데이터를 더 구조적으로 관리하고, 각 데이터 항목에 관련된 속성들을 하나의 단위로 묶어서 처리하기 위함
    // 예) key: todos value: ["a", "b", "c"] -> 키-값 쌍으로 데이터를 구성한 데이터 구조
}

// ToDoList 삭제하는 버튼 추가 할꺼임
function deleteToDo(event){
    // console.log("lalala");
    
    // 문제 어디를 클릭한지 모름
    //console.dir(event.target.parentElement.innerText);

    // 우리가 삭제하고 싶은 li
    const li = event.target.parentElement;
    li.remove();
}

function painToDo(a){
    console.log("I will paint", a);
    // li 추가
    const li = document.createElement("li");

    // 즉 객체에 아이디를 부여 받아서 투두리스트를 저장을 하고 
    // 부여 받은 각 li도 일치 시키려고 아이디 부여 하는거라고 보면 되겠네
    li.id = a.id;

    const span = document.createElement("span");
    const button = document.createElement("button");

    li.appendChild(span); // li 자식 span 생성
    li.appendChild(button);
    span.innerText = a.text; 
    button.innerText = "❌"; 
    button.addEventListener("click", deleteToDo);
    // console.log(li);

    // li를 list(toDoList)에 추가
    toDoList.appendChild(li);


}

function handleToDoSubmit(event) {
    event.preventDefault(); // 기본 폼 제출막기
    const newTodo = toDoInput.value; // toDoInput 값을 저장, 새로운 변수에 복사 했기 때문
    toDoInput.value = ""; // 빈 문자열로 설정하여 입력 필드를 비움

    // 여기서 toDoInput.value 값이 비워졌다해서 newTodo가 비워지는게 아님
    // const newTodo = toDoInput.value -> 새로운 변수에 복사 했기 때문
    // console.log(newTodo, toDoInput.value);


    // toDos 배열을 가져와서 newTodo를 push 할것
    // Deleting 하기위해 id 부여
    // 이제 push 하고 싶지 않고 object를 만들고 싶어 
    // 즉 객체에 아이디를 부여 받아서 투두리스트를 저장 -> 데이터베이스에 id 저장하는 옵션 줌
    const newTodoObj ={
        text:newTodo,
        id: Date.now(),
    }

    // toDos.push(newTodo);
    toDos.push(newTodoObj);
    saveToDos(); // 로컬스토리지에 저장

    // painToDo(newTodo); // handleToDoSubmit에서 painToDo(newTodo)를 호출
    painToDo(newTodoObj);

}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){
    // console.log("hello");
    // console.log("this is the turn of", item);
    // js에서 지금 처리되고 있는 item 그냥 제공함
}

// handleToDoSubmit가 실행 될때 painToDo(newTodo);에 저장을하고 
// 다시 새로운 painToDo(a) 넣어서 출력

// 로컬스토리지에 savedToDos가 존재하면 
// 각각의 아이템을 순회한뒤 그 아이템들을 parsedToDo 제이슨을 이용해 꺼내온다.
const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    // console.log(parsedToDos);
    toDos = parsedToDos;
    // parsedToDos.forEach((item) => console.log("this is the turn of", item));
    parsedToDos.forEach(painToDo);
}

// 버튼 X 눌러서 ToDo 삭제시 화면상으로는 삭제는 되는데
// 로컬 스토리지에는 업데이트 반영이 안된다

// ToDos 들에게 ID 같은걸 부여하고 싶어
// 텍스트 대신 오브젝트로 만들고 싶어
// [{id:121212, text:"drink"}] --> array, object 안에 id가 있고 text는 이렇게 되어 있어, 이게 내가 만들고 싶은 array야 
// ToDos 내용은 text에 담김 랜덤한 id도 필요

// 1. 첫번째 
// ToDos 데이터베이스 비우기
// 랜덤으로 id를 만드는 방법을 보여줄거야 완전 랜덤한 숫자는 아니고
// 요소가 만들어질 때 이 id를 갖게 될 거야
// Date.now()는 밀리초(1000분의 1초)를 주는 함수야
// 이 초들이 거의 랜덤처럼 보이지 --> 꽤 유용해 우리에게 랜덤 숫자를 줄거야

// 데이터베이스에 id 저장하는 옵션 줌

// function handleToDoSubmit(event) 부분 수정

