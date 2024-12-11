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
    const username = loginInput.value; // 변수 만들 필요없음

   // localStorage에 유저네임을 저장 
   // localStorage.setItem(USERNAME_KEY, username); 
    localStorage.setItem(USERNAME_KEY, loginInput.value); 
    painGreeting(username);
}

// painGreeting 함수는 따로 인자를 받을 필요가 없어 로컬 스토리지에 유저 정보가 존재하는걸 알고 있기 때문
// 아규먼트 인자 다 제거
// painGreeting 함수가 로컬 스토리지로부터 유저정보를 받는거임
function painGreeting(username){
    // 로컬 스토리지에 있는 유저네임을 찾도록 작성
    // 로컬 스토리지 뭔가 저장하면 painGreeting 호출하는 순간 
    // 로컬 스토리지에 저장되어 있는 유저네임을 찾겠네
    // greeting 텍스트 넣어 줄때도 유저 정보를 찾고 있음

    // 두 번 열어볼 필요는 없음, 로컬 스토리지 두번 확인 (선택사항) 
    // const username = localStorage.getItem(USERNAME_KEY); 
    
    greeting.innerText = `Hello ${username}`; // 백틱 사용!
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // username 반복되고 있음 -> 전역 변수 통일
// 유저네임 존재여부 여기서 찾고 있음
if (savedUsername === null){ // saveedUsername 값이 null일 경우 form을 표시
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);  // 여기 리스너 처리하는 이유가 뭘까?
} else {
    painGreeting(savedUsername);
}

// 로컬 스토리지 두번 확인해서 유저네임 확인하고 싶을때
// function onLoginSubmit() 부분 -> const username = loginInput.value; // 변수 만들 필요없음
// painGreeting 인자 제거
// function painGreeting() 부분 -> const username = localStorage.getItem(USERNAME_KEY); 한번 더 가져옴