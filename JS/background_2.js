// 이미지가 아니라 배경으로 만들고 싶어서 이렇게 해봤습니다.

const images = ["bg_1.jpg", "bg_2.jpg"];

const todaysImgNum = Math.floor(Math.random() * imgs.length);
const todaysImg = imgs[todaysImgNum];

const bgImg = document.createElement("style");

bgImg.innerText = `body {background-image: url(img/${todaysImg}); background-position: center; background-repeat: no-repeat; background-size: cover; }`;

document.head.appendChild(bgImg);
console.log(bgImg);