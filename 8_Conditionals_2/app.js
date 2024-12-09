// const age =parseInt(prompt("How old are you"));
// console.log(isNaN(age));
// isNaN 은 boolean을 반환함

// isNaN 은 무언가가 NaN인지 판별하는 방법
// const age= parseInt(prompt (“How old are you?”));
// console.log(isNaN(age));
// 숫자입력하면 false
// 글자입력하면 ture

// if(condition){
//     // 실행코드=true ---실행

// } else{
//     // 실행코드=false ----다음 else 값 실행
// }
// if 코드만 적어도 됨
// condition은 boolean으로 판별가능해야 한다, (true , false)

const age =parseInt(prompt("How old are you"));

// 나이가 숫자가 아니라면 
// if(isNaN(age)){
//     console.log("please wirte a number");
// } else{
//     console.log("Thank you for writing your age");
// }

// 20세 이상만 음주 가능해
if(age >= 20){
    console.log("Drink!!");
} else{
    console.log("You must be at least 20 years old to drink");
}

