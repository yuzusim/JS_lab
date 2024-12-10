const h1 = document.querySelector("div.hello:first-child h1");

// 1) raw string
// function handleTitleClick(){
//     // h1.className = "active";
//     if (h1.className === "active"){
//         h1.className = "";
//     } else {
//         h1.className = "active";
//     }
//     // "active" string을  두번 사용하고 있음 -> 에러의 위험이 있음 
//     // 에러를 줄이기 위해 raw string을 쓰는 대신, const를 생성하기!
//     // JS로 모든 class name을 변경하지는 않는다.
//     // raw string이 반복되면 const로 만들어 준다.

// }

// 2) 상수 선언 -> 에러를 줄이기
// function handleTitleClick(){
//     const clickedClass = "clicked";
//     if (h1.className === clickedClass){
//         h1.className = "";
//     } else {
//         h1.className = clickedClass;
//     }
// }

// 3) html에 class 가 있는 상태면?
// JS는 과거의 class 상관안하고 교체해버림
// 최초의 class name이 사라졌고.., 
// sexy-font라는 class name을 간직하고 싶은데 이건 어떻게 해야하는가.
function handleTitleClick(){
    const clickedClass = "clicked";
    // const clickedClass = "clicked sexy-font";에 추가하면 되긴 하는데 좋은 방법은 아니다. 
    // class를 추가할 때마다 js랑 css에서 업데이트를 계속 해야하니까.
    // 우리가 해야하는건 js로 모든 class name을 변경하지 않는거다. 
    // 이 sexy-font를 삭제하지 않고 clicked class를 변경하고 싶다는거지

    if (h1.className === clickedClass){
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
}

h1.addEventListener("click", handleTitleClick);




