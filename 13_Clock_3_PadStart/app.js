// const colck = document.querySelector("h2#clock");
// // colck.innerText = "lalala";

// function sayHello(){
//     console.log("hello");
// }
// 이 함수를 2초마다 실행

// 1)
// setInterval(sayHello, 5000)
// Interval (매번 일어나야 하는 무언가) -> 한 함수를 특정 시간마다 실행함
// 첫번째 실행하고자 하는 펑션 -> sayHello
// 두번째 아규먼트에 호출되는 펑션 간격을 몇 ms 할지 쓰면 됨 -> 5초

// 2)
// setTimeout(sayHello, 1000);
// 1초 기다렸다가 한번만 실행

// 시간이랑 분을 보여줄꺼야
// Date object 라는 멋진 툴을 써볼께 (콘솔창네 써서 확인해봄)
// Date 
// new Date()

// const date = new Date();
// date.getDate();
// date.getDay();
// date.getFullYear();
// date.getHours();
// date.getMinutes();
// date.getSeconds();

// 3)
// 그럼 보여줘야 할게
// getHours, getMinutes, getSeconds
// 뭔가 계속 실행하고 싶을때 Interval 써야함

// const colck = document.querySelector("h2#clock");

// function getClock(){
//    const date = new Date(); // 객체로 현재 날짜와 시간을 가져옴
//    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
//    // console.log 대신 innerText로!!
//    colck.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
// }

// getClock() // getClock()을 즉시 호출
// setInterval(getClock, 1000); // 매초 마다 getClock()을 다시 실행

// 00:00:0
// 00:00:1 말고 -->  00:00:01
// fomating 하고 싶어 그래서 getClock()을 호출할 건데 --> 다음 시간!
// 웹사이트 페이지 로드시 getClock()을 실행하고 또 매초마다 다시 실행

// 4) 문자 두개로 채움 -> 00:00:1을 -->  00:00:01로
// padStart(2, "0") -> 길이가 2가 아니라면 앞에 0으로 채움
// padEnd 도 있음!!

const colck = document.querySelector("h2#clock");

function getClock(){
    const date = new Date(); // 객체로 현재 날짜와 시간을 가져옴
    // getHours는 넘버라서 텍스트로 바꿔줘야함 
    // string으로 감싸줌
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
 }
 getClock() // getClock()을 즉시 호출
setInterval(getClock, 1000); // 매초 마다 getClock()을 다시 실행