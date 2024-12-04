// const playerName = "nico";
// const playerPoints = 121212;
// const playerHandsome = false;
// const playerFat = "little bit";

// player.name
// player.points
// player.handsome

//array
// const player = ["nico", 1212, false, "little bit"];

// object
// {} 안에 특성 작성
const player = {
    name: "yuzu",
    points: 10,
    fat: true,
};


// console.log(player);
// 1. property를 불러오는 방법은 2가지
// console.log(player.name);
// console.log(player["name"]); 

// 또한 property를 바꾸는 것은 가능하지만 선언된 object를 바꾸는 것은 불가능
// 2. const 수정 불가능 object 안에 무언가를 바꾼 것
// 무언가를 업데이트를 하는 것은 상관없음, 문제 없음
// console.log(player);
// player.fat = false;
// console.log(player);

// 3. const가 Boolean으로 바뀌면 에러가 발생함
// console.log(player);
// player = false;
// console.log(player);

// 4. property를 추가 할 수도 있다
// console.log(player);
// player.lastName = "potato";
// console.log(player);

console.log(player);
player.points = 15;
player.points = player.points + 15;
console.log(player);