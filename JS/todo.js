const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
    event.preventDefault(); // 기본 폼 제출막기
    const newTodo = toDoInput.value; // toDoInput 값을 저장, 새로운 변수에 복사 했기 때문
    toDoInput.value = ""; // 빈값을 만듬 toDoInput 값을 비우는 역할

    // 여기서 toDoInput.value 값이 비워졌다해서 newTodo가 비워지는게 아님
    // const newTodo = toDoInput.value -> 새로운 변수에 복사 했기 때문
    console.log(newTodo, toDoInput.value);

}

toDoForm.addEventListener("submit", handleToDoSubmit);
