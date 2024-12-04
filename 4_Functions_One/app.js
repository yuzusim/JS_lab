// player.points(); 라고 사용하지 않았다. 
// player.points은 function이 아니기 때문. player.points은 숫자다.
// player에게 function을 주기 전에, 어떻게 function을 만드는지를 배워야 한다.
// function은 계속 반복해서 사용할 수 있는 코드 조각이다.

// Hello를 해주는 function 작성
// function이 없는 세상에서 이렇게 작성할 것임..
// 모든 친구들에게 인사 하려면 console 너무 많이 찍게 됨 .. 노노
// console.log("Hello my name is yuzu");
// console.log("Hello my name is kim");
// console.log("Hello my name is song");

// 목표는 친구들에게 인사 하지만 우리는 코드 반복을 최소한으로 줄여서 해야함
// 게을러지자  

// function은 어떤 코드를 캡슐화 해서 실행을 여러번 할 수 있게 해준다.

// function 선언 :
// function 함수명() {
// 실행코드
// }

// sayHello() 때릴때마다 실행 코드가 실행됨
function sayHello(){
    console.log("Hello my name is C!");
};
    
// 소괄호 안에 작성하는 것은 실행버튼을 누를 때마다 발생한다.

// 이렇게 쳐서 실행할 수 있다.
// sayHello(); 
// sayHello(); 
// sayHello(); 

// funtion 실행 : 함수명();
// argument(인수)는 function을 실행하는 동안 정보를 
// function에게 보낼 수 있는 방법으로, 
// 소괄호 안에 위치한다.
sayHello("yuzu"); 
sayHello("kim"); 
sayHello("song"); 
