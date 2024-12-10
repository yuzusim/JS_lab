const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

// 1) submit 이벤트
// function onLoginSubmit() {
//     const username = loginInput.value; 
//     console.log(username);
// }

// // click 이벤트 필요 없음, 이제는 클릭이 아닌 submit을 감지 해야함
// // submit 이벤트
// loginForm.addEventListener("submit", onLoginSubmit)


// loginForm.addEventListener("submit", onLoginSubmit())
// onLoginSubmit() --> ()을 추가 하는 건 바로 function을 즉시 실행
// 우린 바로 실행되는건 원하지 않음
// submit 이벤트가 발생하면 브라우저가 알아서 function을 실행시켜 줌
// addEventListener 통해 바로 실행 시키려고 하는게 아니라
// addEventListener를 활용할 때는 function 이름만 적어주고 
// 지정한 이벤트가 발생했을 때만 브라우저가 해당 function을 실행시킴

// 이벤트가 발생할 때 브라우저가 function을 호출
// 아큐먼트 추가시 
// onLoginSubmit(xxxxx) 여기 첫번째 아큐먼트로써 추가적인 정보를 가진 채로 호출하게 될 것임

// 2) preventDefault() 함수 -> 기본 폼 제출 막기
// function onLoginSubmit(tomato) {
//     tomato.preventDefault();
//     console.log(tomato);
// }

// loginForm.addEventListener("submit", onLoginSubmit)

// 뭔가 정보를 얻고 있다. onLoginSubmit function에 대한 아규먼트로

// 총 정리 -> ★ 중요 ★
function onLoginSubmit(event){
    // 브라우저가 기본 동작을 실행하지 못하게 막기
    // event object는 preventDefault함수를 기본적으로 갖고 있음
    event.preventDefault();  
    //console.log(event);
    console.log(loginInput.value);
    
}
loginForm.addEventListener("submit", onLoginSubmit); 
// submit 이벤트가 발생한다면, onLoginSubmit함수를 실행시킨다는 의미 
// JS는 onLoginSubmit함수 호출시 인자를 담아서 호출함. 
// 해당 인자는 event object를 담은 정보들


// form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있다. << 우리가 원하는 것이 아님!
// preventDefault() 함수를 추가함으로써 브라우저의 기본 동작을 막을 수 있다!!
// 기본 폼 제출을 막기 라고 보면 되겠네 실행해보면 submit안됨
// 수업 시간에 프젝하면서 완전 이해는 못하고 그냥 썼는데 이제 알겠어
// 유저네임 유효성 실시간 검사할때 폼제출 막고 지정한 이벤트 발생했을 때만 실행되는거지!!

// 이 preventDefault 함수는 EventListener 함수의 '첫 번째 argument' 안에 있는 함수이다. 첫 arument는 지금 막 벌어진 event들에 대한 정보를 갖고 있다.
// JS는(기본적으로)argument를 담아서 함수를 호출하는데, 이 argument가 기본 정보들을 제공하고 있다. ex) 누가 submit주체인지, 몇 시에 submit을 했는지 등등 콘솔에 출력해보면 알 수 있음