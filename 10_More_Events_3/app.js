// event를 사용하는 두 가지 방법
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    h1.style.color = "blue";
}

function handleMouseEnter() {
    // console.log("Mouse is here")
    h1.innerText = "Mouse is here!"
}

function handleMouseLeave() {
    // console.log("Mouse is gone")
    h1.innerText = "Mouse is gone!"
}

function handleWindowsResize(){
    // body는 특별해서 document.body 이런 식으로 호출할 수 있음. 하지만
    // document.div 이런식으로 가지고 올 수 없음.
    document.body.style.backgroundColor = "tomato";
}

function handleWindowsCopy(){
    alert("copier");
}

function handleWindowOffline(){
    alert("Wifi OffLine");
}

function handleWindowOnline(){
    alert("Wifi OnLine");
}


// 첫번째 방법
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

// 두번째 방법
// h1.onclick = handleTitleClick;
// h1.onmouseenter= handleMouseEnter;
// h1.onmouseleave = handleMouseLeave;

// 위에 두 코드는 동일하나 addEventListener를 선호하는 이유는
// removeEventListener을 통해서 event listener을 제거할수있기 때문이다.

// window object이용하기
window.addEventListener("resize", handleWindowsResize);
window.addEventListener("copy", handleWindowsCopy);
window.addEventListener("offline" , handleWindowOffline);
window.addEventListener("online" , handleWindowOnline);

