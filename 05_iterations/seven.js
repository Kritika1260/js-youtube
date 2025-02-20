const myNumbers = [1, 2, 3, 4, 5, 6, 7]
//const newNums = myNumbers.map( (num) => num+10) //when we will open scope return values
//console.log(newNums);

//                         Chaining
//const newNums = myNumbers.map( (num) => num * 10).map( (num) => num+1)
//console.log(newNums);

//we can even use filter in chaining
const newNums = myNumbers.map( (num) => num * 10).map( (num) => num+1).filter( (num) => num >=40)
console.log(newNums);


