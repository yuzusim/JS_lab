const images = ["bg_1.jpg", "bg_2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
// console.log(chosenImage);

// js에서 이미지를 만들고 html에 추가하기
// JS에서 html 요소를 생성 createElement(" ")
// 예를 들어,
// document.createElement("img")일 경우 html 내에 img 태그를 생성
const bgImage = document.createElement("img");

// html 내에 img 태그를 생성한걸 랜덤 이미지로 가져옴
bgImage.src = `img/${chosenImage}`;
console.log(bgImage);

bgImage.className = `bgimage`;

// appendChild()는 body에 html을 추가
document.body.appendChild(bgImage);

// appendChild() : 함수 안의 경로에 정의한 값을 가장 뒤에서 기입함
// prepend() : 반대로 앞에서 기입
// ??? 차이점 찾아봄

// 차이점 요약
// appendChild(): 부모 요소의 가장 뒤에 새로운 요소를 추가.
/* <body>
  <p>첫 번째 콘텐츠</p>
  <img src="img/bg_1.jpg">
</body> */


// prepend(): 부모 요소의 가장 앞에 새로운 요소를 추가.
/* <body>
  <img src="img/bg_1.jpg">
  <p>첫 번째 콘텐츠</p>
</body> */

// 그래서 appendChild() 썼구나
