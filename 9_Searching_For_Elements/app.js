// 1) class로 요소를 가져오는 법
// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);
// getElementsByClassName() : 많은 element를 가져올때 씀(array를 반환)


// 2) div class중 h1 요소를 가져오는 법
// const title = document.getElementsByTagName("h1") ;
// console.log(title);
// getElementsByTagName() : name을 할당할 수 있음(array를 반환)
// tag는 anchor, div, section, button 의미함


// 3) div class중 원하는 h1 하나만 요소를 가져오는 법
// const title = document.querySelector(".hello h1") ;
// console.log(title);
// querySelector : element를 CSS selector방식으로 검색할 수 있음 (ex. h1:first-child)
// .hellos h1 마치 css 선택자 처럼 원하는 요소를 선택 가능

// querySelector는 단 하나의 element를 return해줌
// ⇒ hello란 class 내부에 있는 h1을 가지고 올 수 있다(id도 가능함)
// 첫번째 element만 가져옴

// 4) 조건에 부합하는 모든 요소를 가져오는 법
// const title = document.querySelectorAll(".hello h1") ;
// console.log(title);
// 조건에 맞는 세개 다 가져오고 싶으면 querySelectorAll
// querySelectorAll은 selector 안의 조건에 부합하는 모든 요소를 가져다 줌
// ⇒ 세개의 h1이 들어있는 array를 가져다 줌

// const title = document.querySelector("#hello") ;
// const title = document.getElementById("hello") ;
// querySelector("#hello); 와 getElementById("hello"); 는 같은 일을 하는 것임
// querySelector는 뭘 검색하는지 명확하지 않음 그래서 id(#) 명시해줌
// querySelector에서는 css selecter 자체를 전달하기 때문

// h1을 가져 온다거나 hello란 id 하위의 form을 가져온다든지 하는건 
// getElementById로 가져올 수 없다.
// 하지만 후자는 하위요소 가져오는 것을 못하므로 전자만 쓸거다.

// 5) querySelector로 title 해보기
const title = document.querySelector(".hello h1") ;
title.innerHTML = "Hello";
