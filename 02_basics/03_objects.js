// $$$$$$$$$$$$$$$$$  to commit and push use -----
// git add .
// git commit -m "Your commit message here"
// git push


// IMPORTANT ----- Objects and Events are very important

// Object.create      //singleton created
// singleton -- single object made by constructor
//when we declare as literals singleton is not created

const mySym = Symbol("key1")

//object literals
const Juser = {
    name: "Kritika", //key value pair , name word is aldo taken as string
    "full name": "Kritika Chaturvedi", //this is string so we cannot access it using dot
    age: 18,
    [mySym]: "key1",    //[ mySym: "key1",  string not symbol
    isLoggedIn: false,
    lastLoginDays: ["mon", "tues"]

} //obj created

// console.log(Juser.age); //accessing obj ele
// console.log(Juser["age"]); //another method for accessing obj
// //in this method we will access by using string
// // console.log(Juser.full name); this will give error strigng cannot be accessed using dot
// console.log(Juser["full name"]);
// console.log(Juser.mySym);//ques is asked how we can use symbol as key in obj
// //this symbol access wil not give error but it will treat it as string when we use typeof
// console.log(Juser[mySym]);//this is right

Juser.age = 20; //change value
// Object.freeze(Juser) //freeze value we cannot change it
Juser.age = 45
// console.log(Juser)  //age weill not be changed


// functions are also treated as var in js

Juser.greeting = function()
{
    console.log("Hello J user");   
}

Juser.greetingTwo = function()
{
    console.log(`Hello J user, ${this.name}`);   
}

console.log(Juser.greeting()); // op as = Hello J user
// console.log(Juser.greeting); //only reference of function will come
console.log(Juser.greetingTwo());
