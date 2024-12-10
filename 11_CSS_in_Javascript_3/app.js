// className -> classList -> toggle 사용 방법

const h1 = document.querySelector("div.hello:first-child h1");

// 1) className -> classList
// classList 우리가 class들의 목록으로 작업할수 있게끔 허용해준다.
// className은 이전 calss를 상관하지 않고 모든걸 교체해 버린다.
// classList를 사용해야 해. class를 목록으로 작업할 수 있게끔 허용해.
// classList를 이용하는건
// js에서 건드리는건 HTML element가 가지고있는 또하나의 요소 사용하는 것이다.
// element의 class내용물을 조작하는 것을 허용한다는 뜻
// contains은 우리가 명시한 class가 HTML element의 class에 포함되어 있는지 말해준다

// function handleTitleClick(){
//     const clickedClass = "clicked";
//     if (h1.classList.contains(clickedClass)){
//         h1.classList.remove(clickedClass);
//     } else {
//         h1.classList.add(clickedClass);
//     }
// }

// 2) toggle
// toggle은 토큰이 존재하면 토큰제거
// 토큰 존재 하지 않으면 토큰 추가

// toggle function은 class name이 존재하는지 확인한다.
// (h1의 classList에 clicked class가 이미있는지 확인하여)
// class name이 존재하면 toggle은 class name을 제거하고, 
// class name이 존재하지 않으면 toggle은 class name을 추가한다.
function handleTitleClick() {
    // const clickedClass = "clicked";
    // 여기서는 한번만 적기 때문에 const도 필요 없다. toggle은 버튼같은거다. 켜고끄고.
    h1.classList.toggle("clicked");
}


h1.addEventListener("click", handleTitleClick);








