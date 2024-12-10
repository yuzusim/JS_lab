const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

// 1. input value
// function onLoginBtnClick() {
//     console.log(loginInput.value); // input에 입력하는 values 얻고 싶음
//     // console.dir(loginInput); // input의 내용을 가져오려면 value라는 property를 찾아봐야 됨.
//     // console.log("click!!!");
// }

// 2. 유저네임 유효성 검사
// function onLoginBtnClick() {
//     // const value = loginInput.value;
//     const username = loginInput.value; // 변수명 바꾸기
//     if (username === ""){ // value 비어 있을때 이름을 이름해
//         // console.log("please write your name");
//         alert("please write your name");
//     }  else if (username.length > 15){ // 유저네임이 15자를 초과해서는 안돼
//         alert("Your name is too long");
//     }
// }

// 3. 브라우저 자체의 기능 사용할 수 있다.
// form으로 전송 input 자체에 validation 구현 가능함  
function onLoginBtnClick() {
    // const value = loginInput.value;
    const username = loginInput.value; 
    console.log(username);

    // input 입력후 버튼 클릭하면 새로 고침이 실행되고 값이 사라짐
    // 내 웹사이트가 재시작시키고 있는거임
    // form 태크가 submit 되고 있기 때문
    // form 안에서 엔터를 누르고 input이 더 이상 존재하지 않으면 자동으로 submit 됨
    // 더 이상 click에 신경쓰지 않아도 됨
}

// 다음 시간은
// 4. 브러우저 새로 고침없이 user정보 저장

// 버튼을 클릭하면, 내가 작성한 값을 콘솔에 보여주는 기능
loginButton.addEventListener("click", onLoginBtnClick)

