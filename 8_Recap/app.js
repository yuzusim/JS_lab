// 복습
const age =parseInt(prompt("How old are you"));

if(isNaN(age) || age < 0){
    console.log("please wirte a real positive number");
} else if(age < 18){
    console.log("you too young.");
} else if(age >= 18 && age <= 50){ // 둘다 true 여야 함
    console.log("You can drink.");
} else if(age > 50 && age <= 80){
    console.log("You should exercise.")
} else if(age === 100){
    console.log("wow you are wise")
} else if(age > 80){
    console.log("You can do whatever you want")
} 


// 1. ==는 동등연산자, 값만 같으면 true이다
// 2. ===는 일치연산저, 값과 값의 종류(Data Type)가 모두 같은지를 비교해서, 같으면 true, 다르면 false라고 한다.
// 3. ex)alert(1 == '1') //true
// alert(1 === '1') //false
// alert(null == undefined) //true
// alert(null === undefined) //false
// alert(true == 1); //true
// alert(true === 1) //false
// alert(true == '1') //true
// alert(true === '1') //false

// 4. 배열형 : 배열의 데이터 값이 같더라도 배열을 할당할때, 각 변수는 각 메모리의 주소를 참조한다. 참조하는 메모리의 주소가 다르기 때문에 두 배열는 같지 않다.
// var a = [1,2,3];
// var b = [1,2,3];
// console.log(a == b); // false
// console.log(a === b); // false

// 5. 객체형도 배열형과 같다.
// var x = {};
// var y = {};
// console.log(x == y) // false
// console.log(x === y) // false

// 6. ==(동등연산자)보다는 ===(일치연산자)를 사용하자


