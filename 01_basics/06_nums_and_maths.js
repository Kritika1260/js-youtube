const score = 400 //it will detect on its own that this is a number
// console.log(score);
//we can also explicitlt define the data type
const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString()); //converted to string
// console.log(balance.toFixed(2)); //precision after decimal will be upto 2
//good practice to use toFixed
const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3)); //op = 23.9

// const otherNumber = 123.8966 //for precision it focuses on 3 digtis 123
// console.log(otherNumber.toPrecision(3)); //op= 124

const hundreds = 10000000
// console.log(hundreds.toLocaleString()); //op = 10,000,000
// console.log(hundreds.toLocaleString('en-IN')); //op = 1,00,00,000

//Number.isSafeInteger
// console.log(Number.MAX_VALUE)


// *********************** MATHS ********************************
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.abs(-4)); //-ve values to +ve
// console.log(Math.round(4.6)); //op = 5
// console.log(Math.ceil(4.2)); //op = 5
// console.log(Math.floor(4.9));
// console.log(Math.sqrt(9));
// console.log(Math.pow(9, 2)); //81
// console.log(Math.min(1, 9, 5, 6)); 
// console.log(Math.max(1, 9, 5, 6)); 

//IMPORTANT
console.log(Math.random()); //always gives values between 1 and 0 including 1 and 0
//can be used to generate random values on a dice
console.log((Math.random()*10) + 1); // to get values between 1 to 9
//or
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

// *********** IMPORTANT ******************
// to get random value that ranges in 10 to 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) //added min to get min value 10 not less than that basically to avoid 0
