const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// 새로고침을 하거나 이용자가 누구인가와 관계없이 똑같은 todo-list가 나온다면 우리는 todo-list를 그 때마다 계속해서 작성해야할 것
// list를 1,000개 작성했는데 단숨에 날라간다면...? 그건 어딘가 부족한 todo-list 일 거다. 그래서 우린 todo-list에 나타낸 텍스트를 저장하는 기능이 필요

// 1. todo - list의 배열 생성
// newTodo 그려질때마다 배열에 push 하고 싶어
// newTodo를 그리기 전 toDos 배열을 가져와서 newTodo를 push 할것
const toDos = []; // toDos의 array을 로컬 스토리지에 저장하고 싶지만 로컬스토리지에 배열을 저장할 수 없음 -> 오직 텍스트만 가능!



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

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);
// savedToDos가 로컬 스토리지에 존재하면
if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    // console.log(parsedToDos);
    
    // 배열 각각의 아이템을 가지고 무언가를 하고 싶을거야
    // 배열에 있는 각각의 아이템에 대해 펑션을 실행한다던지, 화면에 뿌린다던지, 텍스트 변형
    // JS는 배열에 있는 각각의 아이템에 대해 펑션을 실행할 수 있게 해줌
    // 

    // parsedToDos.forEach(sayHello);
    // parsedToDos가 가지고 있는 각가의 아이템에 대해 sayHello 펑션 실행해줘

    // 람다식으로 펑션 sayHello 필요 없음
    parsedToDos.forEach((item) => console.log("this is the turn of", item));

    // local storage에 array로 저장이 안되기 때문에 
    // JSON.stringify로 array처럼 생긴 string으로 저장한 후 
    // 다시 JSON.parse 이용해 array로 꺼내는 방법이네요
    // array.foreach는 받아온 array를 for 반복문 없이 
    // item 하나씩 function에 넣을 수 있는 신기한 녀석이네요

}


// 1. 사용법

// 1) for문
// 배열의 인덱스 기반으로 반복을 처리합니다.
// 반복 범위나 조건을 직접 정의할 수 있어 더 유연합니다.
// 배열뿐만 아니라 숫자 범위나 일반 객체에도 사용할 수 있습니다.
// const numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]); // 1, 2, 3, 4, 5
// }

// 2) forEach()
// 배열에 특화된 반복문입니다.
// 배열의 각 요소를 순서대로 처리하며, 자동으로 요소 값을 가져옵니다.
// 인덱스를 수동으로 관리하지 않아 코드가 더 간결해집니다.
// numbers.forEach((num) => {
//     console.log(num); // 1, 2, 3, 4, 5
// });
