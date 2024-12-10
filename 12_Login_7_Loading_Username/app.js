const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 유저네임 입력 -> 유저네임 저장 -> 다시 확인하는 흐름

// localStorage에 유저 정보가 없으면 form부터 보여주면서 했던걸 보여주면 됨
// localStorage에 유저 정보가 있으면 form을 보여주면 안됨

// localStorage.setItem("username", "nico"); 키와 값을 저장함.
// localStorage.getItem("username");  키, 값을 불러옴.
// localStorage.removeItem("username", "yu"); 키, 값을 삭제함.

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; // username 전역변수 할당

// 1) localStorage에 유저정보 유무확인
function onLoginSubmit(event){
    event.preventDefault();  
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value; // 만약 loginInput.value를 onLoginSubmit 함수 내부가 아닌 외부에서 선언하면 local storage에 저장을 못함
    localStorage.setItem(USERNAME_KEY, username); // localStorage에 유저네임을 저장
    // greeting.innerText = `Hello ${username}`; // 백틱 사용!
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    painGreeting(username);

}

// greeting 함수로
function painGreeting(username){
    greeting.innerText = `Hello ${username}`; // 백틱 사용!
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // username 반복되고 있음 -> 전역 변수 통일
if (savedUsername === null){ // saveedUsername 값이 null일 경우 form을 표시
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);  // 여기 리스너 처리하는 이유가 뭘까?
} else {
    // show the greeting
    // greeting 함수로 만들기
    // greeting.innerText = `Hello ${username}`; // 백틱 사용!
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    painGreeting(savedUsername);

}

// onLoginSubmit 됐을때
// painGreeting(username); 실행 되는 거고 그걸 localStorage 저장한다. 
// 그리고 다시 유저네임 정보를 확인하려 했을때
// USERNAME_KEY 으로 확인 = painGreeting(savedUsername); 같은거

// paintGreetings(username); 이면 상수 username의 loginInput.value가 abc 자리로 가는 거고, 
// paintGreetings(savedUsername);이면 localStorage에서
// 꺼내오는 상수 USERNAME_KEY에 대응하는 키 username의 입력된 이름 value가 abc 자리로 가는 거죠.

