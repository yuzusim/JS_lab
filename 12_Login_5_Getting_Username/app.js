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

function onLoginSubmit(event){
    event.preventDefault();  
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // 방법 1)
    // greeting.innerText = "Hello " + username;

    // 방법 2)
    greeting.innerText = `Hello ${username}`; // 백틱 사용!
    greeting.classList.remove(HIDDEN_CLASSNAME);

    // 'hello!' + username + nice to meet you!; 는
    // `hello ${username} nice to meet you `; 와 같으며 후자의 방법 사용하자.
    // 둘 다 변수를 string 안에서 사용할 수 있게 해줌
}

loginForm.addEventListener("submit", onLoginSubmit); 