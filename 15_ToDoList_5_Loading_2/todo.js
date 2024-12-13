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
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.appendChild(span); // li 자식 span 생성
    li.appendChild(button);
    span.innerText = a; 
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
    toDos.push(newTodo);
    saveToDos(); // 로컬스토리지에 저장

    painToDo(newTodo); // handleToDoSubmit에서 painToDo(newTodo)를 호출

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

// 1. ((item) => console.log("this is the turn of", item));
// 2. function sayHello(item){}

// 문제점 : 새로 추가한 것들만 로컬 스토리지에 저장되고 예전 것은 없어짐
// const toDos = []; ----> 어플리케이션이 실행될때마다 이 값이 비어 있기 때문
// newTodo를 toDos array(빈 array)에 그냥 push하게 됨

// 업데이트 해야 됨












// toDos.push(newTodo)로 이 하나의 keyValue라는 상자 안에 하나 이상의 정보를 담아버리기~~

// 그리고 다시 저장된 것을 가져올 때에는

// const savedToDos = localStorage.getItem(TODOS_KEY);
// //getItem으로 호출하면 'value' 형태로 호출된다. '' 가 붙은 상태로 호출된다는 말.
// if (savedToDos !== null) {
// const parseToDos = JSON.parse(savedToDos); //getItem의 '' 를 parse 로 삭제.
// toDos = parseToDos; //[] = ['a','b','c']
// parseToDos.forEach(paintToDo);
// }






// 이번 강의 목표! 이전에 입력한 toDo와 새롭게 입력한 toDo 모두 유지하고 싶다!
// const toDos = []; => application이 시작될 때마다 toDos array는 항상 비어있기 때문에 
// 새로운 것만 저장되는 거다.
// 그래서 newToDo를 작성하고 form을 submit 할 때마다 newToDo를 
// toDos array (빈 array)에 그냥 push 하게 된다.
// 그리고 그 toDo를 저장할 때 나는 새로운 toDo들만 포함하고 있는 array를 저장하는거다. 
// 이 array는 이전의 toDo들은 가지고 있지 않다. 전에 있던 toDo들은 localStorage에 들어있다. 
// 새로운 toDo들은 사용자가 입력하는 것이다.
// 우리는 단지 newTodo들만 toDos array에 추가해서 단지 newToDo들만 localStorage에 저장하고 있는거다. 
// 즉, 우리가 갖고 있던 toDos의 이전 복사본을 잊어버리고 있다는 말이다.

// ======해결 방법=======
// application이 시작될 때 toDos array를 빈 값으로 시작하는 대신에, 
// const를 let으로 바꿔서 업데이트가 가능하도록 만들고, 
// localStorage에 toDo 들이 있으면 toDos에 parsedToDos를 넣어서 전에 있던 toDo들을 복원하면된다.