const colck = document.querySelector("h2#clock");
// const clock = document.querySelector("#clock");
// const clock = document.getElementById("clock");
// 모두 같다.

// colck.innerText = "lalala";

function sayHello(){
    console.log("hello");
}
// 이 함수를 2초마다 실행

setInterval(sayHello, 5000)
// Interval (매번 일어나야 하는 무언가) -> 한 함수를 특정 시간마다 실행함
// 첫번째 실행하고자 하는 펑션 -> sayHello
// 두번째 아규먼트에 호출되는 펑션 간격을 몇 ms 할지 쓰면 됨 -> 5초

