// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// input 안에 뭔가를 작성하고 로그인 버튼을 누르면 저장해야 되니까 자바스크립트로 그 기능 구현
// 그냥 html 태그를 가져올 수 없으니까 변수 안에 넣고 거기서 텍스트 받기
// document 안에서 찾기. id="login-form"인 곳에서 input요소를 loginInput 안에 넣어주기
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    console.log(loginInput.value); // input에 입력하는 values 얻고 싶음
    // console.dir(loginInput); // input의 내용을 가져오려면 value라는 property를 찾아봐야 됨.
    // console.log("click!!!");
}

// 버튼을 클릭하면, 내가 작성한 값을 콘솔에 보여주는 기능
loginButton.addEventListener("click", onLoginBtnClick)

