const age =parseInt(prompt("How old are you"));

// if가 하나 이상일 경우 

if(isNaN(age) || age < 0){
    console.log("please wirte a real positive number");
} else if(age < 18){
    console.log("you too young.");
} else if(age >= 18 && age <= 50){ // 둘다 true 여야 함
    console.log("You can drink.");
} else if(age > 50 && age <= 80){
    console.log("You should exercise.")
} else if(age > 80){
    console.log("You can do whatever you want")
}



