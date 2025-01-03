const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// 업데이트
let toDos = []; 


// 저장 기능 추가 -> 저장 기능을 함수를 정의
// 로컬 스토리지에 저장 그걸 불러와서 화면에 그려줌.
function saveToDos() { // saveToDos의 역할 -> toDos의 array 내용을 로컬스토리지에 저장
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));

}

// ToDoList 삭제
function deleteToDo(event){

    // 우리가 삭제하고 싶은 li
    const li = event.target.parentElement;
    li.remove(); // DOM에서 li 삭제
    // console.log(typeof li.id);

    // 클릭했던 의 id를 갖고 있는 toDo를 지우고 싶어 
    // toDos 배열에서 li의 id와 일치하는 항목 제거
    // toDo.id가 li.id와 다른 경우에만 새 배열에 포함
    // toDos number 타입, li string 타입 parseInt 써서 문자열을 숫자로 바꿈
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));

    // toDos DB에서 toDo를 지운 뒤 saveToDos 한번 더 불러야함
    saveToDos(); // 변경된 toDos 저장
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

}



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


