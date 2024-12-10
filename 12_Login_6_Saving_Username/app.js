const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 유저가 이름을 제출하면 -> 클릭 후 -> form 태그 없애기 (form 자체가 아예 없어져야 함)

// 1단계
// HTML요소 자체를 없애기
// function onLoginSubmit(event){
//     event.preventDefault();  
//     const username = loginInput.value;
//     loginForm.classList.add("hidden");
//     console.log(username);    
// }

// 2단계
// h1 안에 greeting에 있는 텍스트 추가
// 즉, 로그인을 하면 안녕하세요 유저네임님 이걸 하려는 것
const HIDDEN_CLASSNAME = "hidden";
// 관습: string만 포함된 변수는 대문자로 쓴다 + 중요한 변수가 아니라 서.
// loginForm, loginInput 중요한 정보를 담은게 아니라서 대문자로 작성

// function onLoginSubmit(event){
//     event.preventDefault();  
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     const username = loginInput.value;
//     // 방법 1)
//     // greeting.innerText = "Hello " + username;

//     // 방법 2)
//     greeting.innerText = `Hello ${username}`; // 백틱 사용!
//     greeting.classList.remove(HIDDEN_CLASSNAME);

//     // 'hello!' + username + nice to meet you!; 는 
//     // `hello ${username} nice to meet you `; 와 같으며 후자의 방법 사용하자.
//     // 둘 다 변수를 string 안에서 사용할 수 있게 해줌
// }

// 3단계
// value를 저장 (유저네임을 저장)
function onLoginSubmit(event){
    event.preventDefault();  
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username", username); // localStorage에 유저네임을 저장
    greeting.innerText = `Hello ${username}`; // 백틱 사용!
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

loginForm.addEventListener("submit", onLoginSubmit); 

// Local storage, Session storage, Cookie 항목이 있어서 각 항목의 차이점
// 1. Cookie: 만료일자를 지정하게 되어 있어서 영구적이지 않습니다. 또한 용량 제한이 있습니다.
// 2. Web storage: 크게 Local storage 와 Session storage 가 있습니다.
    // 1) Local storage: 저장한 데이터를 직접 지우지 않는 한 데이터가 영구적으로 저장됩니다.
    // 2) Session storage: 브라우저 종료 시 데이터가 사라집니다.

// localStorage.setItem(key, value);
// 로컬 저장소에 해당 키와 값을 저장함.

// localStorage.getItem(key);
// 로컬 저장소에 해당 키에 해당되는 값을 불러옴.

// localStorage.removeItem(key);
// 로컬 저장소에 해당 키에 해당되는 키, 값을 삭제함.

// localStorage.setItem("username", username);
// localStorage.setItem("username", "nico");
// localStorage.getItem("username");
// localStorage.removeItem("username");