// how data is stored in memory and how it can bge accessed can be divided in two parts
// Primitive and Non-Primitive

//Primitive 7 types - changes are made in the copy of data not in original data reference of memory is not give
// 7 Types -
// String, Boolean, Number, Null(no value, empty), undefined(var is declared but we have not given any value)
// Symbol(to make any value unique), BigInt

//Imp for learning js - Objects and browser events

// ***** JavaScript is a dynamically typed language.
//This means that:
//You don't need to explicitly declare the type of a variable when you create it.
//The type of a variable can change during runtime based on the value assigned to it.
//The interpreter determines the type of a variable at runtime.

// let x = 5; // x is a number
// x = "Hello"; // x is now a string
// x = [1, 2, 3]; // x is now an array

//Typescript’s example:
// let x: number = 5; // x is explicitly declared as a number
// x = "Hello"; // Error: Type 'string' is not assignable to type 'number'

const score = 100 // number
const scoreVal = 100.3 // also num not treated as float
const isLoggedIn = false; //boolean
const outsideTemp = null; // empty val
let userEmail; //undefined
const id = Symbol('123') //immutable and unique
const anotherId = Symbol('123')
// val of id and anotherid will not be same
// console.log(id === anotherId);

const bigNumber = 34723749346923487382947n //big int


// Non - Primitive or Reference
//Array, Objects, Functions

const heros = ['a', "b", "c"]; //array
//objects are written in curly braces in key value pairs
let myObj = {
    name: "Kritika",
    age: 21,
}

//function
const myFun = function(){
    console.log("Hello World");
}
console.log(typeof bigNumber)
console.log(typeof outsideTemp) //will give obj as output IMPORTANT ********
console.log(typeof myFun) //object function
//**** Non-primitive datatype weill return object as their type


