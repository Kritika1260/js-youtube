const userEmail = "kc@gmail.com" //this value will be taken as true by if statement
//userEmail = "" -- taken as false
// userEmail = [] -- taken as true
// if(userEmail){
//     console.log("Email");  
// }
// else{
//     console.log("not email");    
// }

//falsy values
//false, 0, -0, BigInt 0n, "", null, undefined, Nan(not a number)
//rest other are truthy values

//truthy values
// "0", 'false', " ", [], {}, function(){} -- empty fun


//how to check if arr is empty
const email = []
if(email.length === 0)
{
    console.log("Array empty");
}

//how to check if obj is empty
const emptyObj = {}
if(Object.keys(emptyObj).length === 0)
{
    console.log("Obj empty");
}

//false ==0    true
//false == ''    true
//0 == ''      true

// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// console.log(val1); op = 5

// val1 = null ?? 10
// console.log(val1); //op = 10

val1 = undefined ?? 15
console.log(val1); //op = 15

val1 = undefined ?? 10 ?? 15
console.log(val1); //op = 10

//Ternanry operator
// condition ? true : false

const tea = 100
tea >= 80 ? console.log("greater than 80") : console.log("less");
;

