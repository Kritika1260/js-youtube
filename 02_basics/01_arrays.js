//array

const myArray = [1, 3, 24, 5, true, "Kritika"] //resizable, mixed values
// console.log(myArray[0]);
//when we copy array shallow copies are created - means whatever
//changes we will do it will be reflected in original array also

const myHeroes = ["a", "b"]
const arr2 = new Array(2, 5, 4)

//Array Methods
myArray.push(90)
// console.log(myArray);
myArray.pop()
// console.log(myArray);

myArray.unshift(0) //insert ele 0 at the start of array but not good practice
myArray.shift() //will remove first ele of array

// console.log(myArray.includes(9)); // return true or false boolean value
// console.log(myArray.indexOf(9));///return -1 if ele not present

const newArray = myArray.join()

// console.log(myArray);//gives array as output
// console.log(newArray);//gives all number as output but as string seperated by comma
 
//slice and splice
console.log("A", myArray);
const myn1 = myArray.slice(1, 3)//returns section of array, last range not included
console.log(myn1);
console.log("B", myArray);

const myn2 = myArray.splice(1, 3)//returns section of array
console.log("C", myArray);
console.log(myn2);





