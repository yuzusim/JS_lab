// 어떻게 데이터를 받는지 알아보기

// function sayHello(){
//     console.log("Hello my name is C!");
// };
    
// sayHello("yuzu"); 
// sayHello("kim"); 
// sayHello("song"); 


/////////////////////////////////////////////////////

// 펑션의 괄호 안의 매개변수에서 아규먼트를 받아들일 수 있다.
// ex)
// function sayHello(nameOfPerson) {
//     console.log(nameOfPerson);
// }

// sayHello("yuzu"); 
// sayHello("kim"); 
// sayHello("song"); 

// 첫 번째 아규먼트로 어떤 뎅이터가 들어 오면
// nameOfPerson 이라는variable 이름을 쓰게 된다는 것
// nameOfPerson은 "yuzu" "kim" "song" 을 받았다고 생각하면 됨.

/////////////////////////////////////////////////////

// 아규먼트는 하나만 받을 수 있는게 아니라 여러개를 받을 수 있음.
// ex)
function sayHello(nameOfPerson , age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("yuzu", 20); 
sayHello("kim", 12); 
sayHello("song", 15); 
// sayHello function의 매개변수 2개는 아래 2개의 argument를 받는 중임.

// ex) 데이터를 function에 보내는 방법
function plus(fristNumber, secondNumber){
    console.log(fristNumber + secondNumber); 
}
// console.log()는 function 밖에서 존재할 수 없다. 
// function의 값은 function 안에서만 존재한다.
// {} 안에서만 존재함!

function divide(a, b){
    console.log(a / b); 
}
plus(8, 60);
divide(98, 20);

// player.sayHello() 같은걸 하고 싶어?
// console.log()
// player.sayHello()

// ex)
// player 오브젝트 안에서 만들기
// function sayHello(){} --> 오브젝트 밖에서 했던 방식
// const player = {
//     name: "yuzu",

//     // 문자, 숫자, boolean 같은 데이터 타입을 넣어주는 대신
//     sayHello: function(){
//         console.log("Hello!");
//     },
// };

// console.log(player.name);
// player.sayHello();

// ex)
// 오브젝트 안에서 매개변수가 아규먼트를 받는 방식
// sayHello 바깥 세상으로부터 아규먼트를 받는 방식
const player = {
    name: "yuzu",

    // 문자, 숫자, boolean 같은 데이터 타입을 넣어주는 대신
    sayHello: function(otherName){
        console.log("Hello! " + otherName);
    },
};

// console.log(player.name);
player.sayHello("lynn");

// ex)
// otherName
// 오브젝트 안에서 매개변수가 아규먼트를 받는 방식
const players = {
    name : function(Name) {
    console.log("Your Name is " + Name + " 입니다.")
    },
    sayHello : function(Age) {
    console.log("Your age is " + Age + " 입니다." )
}
}

players.sayHello(14)
players.name("james")


