// 오브젝트 복습
const days = ["mon", "tue", "wed"]

// 의미가 있는 property를 저장하랴고 할때
// 연관되어 있는 property들을 그룹으로 묶어서 저장할 때
// player라는 오브젝트 안에서 만들기(예시 player 말고 내가 맘대로 지으면 됨)
const player = {
    name: "yuzu",
    age: 98,
};

//console.log("yuzu");
//console.log(player.name);

console.log(player, console);
// player를 console.log함
// console 자체를 console.log함

// console.log(player);
player.name = "yuzus";
console.log(player);
player.sexy = "soon";
console.log(player);


// function(){} 복습
// function은 어떤 코드를 캡슐화해서 계속 반복해서 사용할 수 있는 코드 조각이다.
// 특정input 기반으로 같은 행동을 실행함
// function plus(){
//     console.log(2 + 2);
// }

// plus(); // 실행함수
// alert("lalala");


// 오브젝트 안에서 매개변수가 아규먼트를 받는 방식
function plus(potato, salad){
    console.log(potato + salad);
}

plus(5, 10); // 실행함수


function minusFive(potato){ // 여기 function은 오직 첫 번째 아규먼트만 받음
    console.log(potato -5);
}
// 실행함수
// 아규먼트를 많이 받아도 문제 되지 않음
minusFive(5, 10, 12, 34, 4, 5, 6, 7); 
// potato의 function은 body에서만 사용가능

// 과제
// a + b
// a - b
// a / b
// a ** b
const calculator ={
    add: function(a, b){
        console.log("a + b =" , a+b , " 입니다." )
    },
    minus: function(a, b){
        console.log("a - b =" , a-b , " 입니다." )
    },
    divide: function(a, b){
        console.log("a / b =" , a/b , " 입니다." )
    },
    power: function(a, b){
        console.log("a + b =" , a**b , " 입니다." )
    },
};

calculator.add(5, 2);
calculator.minus(5, 2);
calculator.divide(5, 2);
calculator.power(5, 2);


