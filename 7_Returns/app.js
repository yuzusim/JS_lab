// calculator에서 console.log 쓰지 말기
const calculator ={
    add: function(a, b){
        return a+b 
    },
    minus: function(a, b){
        return a-b 
    },
    times: function(a, b){
        return a*b 
    },
    divide: function(a, b){
        return a/b 
    },
    power: function(a, b){
        return a**b
    },
};

// 서로 의존하고 있음
const plusResult = calculator.add(2, 3);
//console.log(plusResult);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);

// console.log (calculator.add(5, 2));

// ex)
// 나의 한국 나이를 계산하는 function 만들기
// const age = 96;
// function calculatKrAge(ageOfForeigner){
//     return ageOfForeigner + 2;
// }

// const KrAge = calculatKrAge(age);
// console.log(KrAge);

// ex) 연습 해봄
// 더하기 해봄
// const a = 2;
// const b = 3;

// function add(){
//     return a + b;
// }
// const plus = add();
// console.log(plus);

// 값 전달 받아서
// function add(a, b){
//     return a + b;
// }
// const plus = add(1, 3);
// console.log(plus);

// 동적으로 값 입력받기 (예: 사용자 입력)
// function add(a, b){
//     return a + b;
// }

// 사용자로부터 입력받기
// const a = Number(prompt("Enter the first number:")); // 입력은 문자열이므로 숫자로 변환
// const b = Number(prompt("Enter the second number:"));

// const plus = add(1, 3);
// console.log(plus);




// 첨엔 살짝 헷갈렸는데 계산기 안에서 값을 콘솔로 보내는것이 아니라 return을 통해 
// 함수를 호출한 녀석에게 다시 주어서 그걸 갖고 또 다른 함수를 호출하는데 쓴다
// (연산결과 자체가 변수에게 주어진다)...이런 느낌인거같다 
// 이걸 이용해서 앞선 연산의 값이 뒤의 연산과 연관되고 결국 체인처럼 서로 얽혀있는 
// 코드들을 만들어보았다 

// 2:00 쯤에 return-> return 한번에 변경하는 법,
// 드래그 후 ctrl + shift + L => 동일한 변수 한번에 변경가능
// (궁금해서 구글링 해봤어요)
// 함수를 통해 console이나 return 아니라 결과값을 받기 원할 때는 return 사용.