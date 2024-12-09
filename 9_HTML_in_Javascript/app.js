const title = document.getElementById("title"); 
// console.log(title);
// html에 있는 id를 불러올 수 있다.
// getElementById 라는 함수가 HTML에서 id를 통해 element를 찾아준다.
// element를 찾고 나면, JS로 해당 HTML의 무엇이든 바꿀 수 있다.


// 모든 것들을 html에서 항목들을 가지고와서 js에서 변경한다
console.dir(title); 
// js에서는 html이 표현하는 object를 보여준다 (element 를 더 자세히 보여줌)


title.innerText = "got you";
// 처럼 js에서 바꾸기 쌉가능 id를 추가했기에 가능.
console.log(title.id);
console.log(title.className);

// element를 찾고 나면, JS로 해당 HTML의 무엇이든 바꿀 수 있다.
// ex. element의 innerText를 바꾼다던가 (title.innerText = "Got you!";)
// id, className 등을 가져 올 수 있음. (cosole.log(title.id);)






