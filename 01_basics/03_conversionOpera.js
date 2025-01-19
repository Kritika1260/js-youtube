let score = "33"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

let score2 = "33abc"
console.log(typeof score2)//even score2 is not a number will we get num as OP
let valueInNumber2 = Number(score2)
console.log(valueInNumber2) //will give NAN as OP which means not a number

// "33" - 33 as OP
// "33abc" - NAN (not a number) as OP
// true - give 1 as OP, false = 0

let isLoggedIn = 1; 
let booleanIsLoggedIn = Boolean(isLoggedIn) //converting to boolean will give true
console.log(booleanIsLoggedIn);
//let isLoggedIn = Hitesh; 
//let booleanIsLoggedIn = Boolean(isLoggedIn) //converting to boolean will give true
//console.log(booleanIsLoggedIn); this will give false

// 1 - true, 0 - false
// "" - false
// "hitesh" = true

let num = 33
let toString = String(num)
console.log(num);
console.log(typeof toString);