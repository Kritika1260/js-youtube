'hello'
"hello" + "world"
const name = "Kritika"
const repoCount = 50
//this + syntax is not preferred nowadays
// console.log(name + repoCount + " Value");

//string interpolation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Kritika-aaaa")
//master Strung methods
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,4) //slicing , index 4 will not be included
console.log(newString);

// const anotherString = gameName.slice(0, 4)
// console.log(anotherString);

const anotherString = gameName.slice(4, -6)
console.log(anotherString);
//substring can also take neg index but it will still give output from 0th index

const newStringOne = "    kritika   "
console.log(newStringOne);
console.log(newStringOne.trim()); //this will remove white spaces 

const url = "https://kri%20tika.com"
console.log(url.replace('%20', '-'))
console.log(url.includes("kritika"))

console.log(gameName.split(" "))//convert to array on basis of space we can change split also



