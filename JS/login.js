const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

// link 변수에 a 태그 잡아오기
const link = document.querySelector("a");

// 기본 폼 제출 막기 -> preventDefault()
function onLoginSubmit(event){
    event.preventDefault();  
    console.log(loginInput.value);    
}

// a 태그 이동 막기
function handleLinkClick(event){
    event.preventDefault(); // 2. 아예 제출 막아버리면 이동 안됨
    console.log(event);
    alert("clicked!"); // 1. alert로 잠시 막아 볼 순 있으나
}

loginForm.addEventListener("submit", onLoginSubmit); 
link.addEventListener("click", handleLinkClick);