
const h1 = document.querySelector("div.hello:first-child h1");

// 1) 유저가 타이틀을 클릭했을때 색상변경
// function handleTitleClick(){
//     // console.log(h1.style.color); // getter
//     // h1.style.color = "blue";
//     // console.log(h1.style.color); // setter

//     // if(h1.style.color === "blue"){
//     //     h1.style.color = "tomato"; 
//     // } else if(h1.style.color != "blue"){ // 이렇게 까지는 할 필요가 없었군
//     //     h1.style.color = "blue"; // 이것만 적어주면 else 니까 blue가 아니라면이 됨
//     // }

//     if(h1.style.color === "blue"){
//         h1.style.color = "tomato"; 
//     } else {
//         h1.style.color = "blue"; 
//     }

// }

// 2) color 현재 상태를 저장하는 법
function handleTitleClick(){ // click event 발생 및 함수 실행
    const currentColor = h1.style.color; // currentColor 변수 선언 후 h1.style.color 값 복사 (getter)
    let newColor; // newColor 변수 선언
    if(currentColor === "blue"){ // currentColor 현재 값 확인
        newColor = "tomato"; // 조건에 따라 newColor에 "tomato" or "blue" 값 대입
    } else {
        newColor = "blue"; 
    }
    h1.style.color = newColor; // h1.style.color에 newColor값 대입 (setter)

}

// 첫번째 방법
h1.addEventListener("click", handleTitleClick);




