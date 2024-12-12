const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

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
    console.log(newTodo, toDoInput.value);
    painToDo(newTodo); // handleToDoSubmit에서 painToDo(newTodo)를 호출

}

toDoForm.addEventListener("submit", handleToDoSubmit);

// handleToDoSubmit가 실행 될때 painToDo(newTodo);에 저장을하고 
// 다시 새로운 painToDo(a) 넣어서 출력