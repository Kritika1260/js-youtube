//mostly we will see we consume promise but we can also create promises

//creation and consumption is done in fetch
//promise is a object

//creation of promise
const promiseOne = new Promise(function(resolve, reject) {
    //do and async task
    //DB calls, cryptography task, n/w related task
    setTimeout(function(){
        console.log("async complete");
        resolve()
    }, 1000)
})

//consume promise, values are returned using .then
promiseOne.then(function(){
    console.log("promise consumed");
})

//doing above written lines in single line
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        //we can also pass obj, arr, fun in resolve
        resolve({username:"chai", email:"chai@example.com"})
    }, 1000)
})

//consume the data sent by resolve
PromiseThree.then(function(user){
    console.log(user);
    
})

const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error)
        {
            resolve({username: "Hitesh", password:"123"})
        }
        else{
            reject("ERROR happened")
        }
    }, 1000)
})

const username = PromiseFour.then((user) => {
    console.log(user);
    return user.username
}) //we cannot store value like this it will give error

console.log(username);

//chaining of .then
PromiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
    
})
.catch(function(error){
    console.log(error)
})
.finally(() => console.log("This will always execute"))


const PromiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error)
        {
            resolve({username: "Javascript", password:"123"})
        }
        else{
            reject("Javascript ERROR happened")
        }
    }, 1000)
})
//instead of .then or .catch we can also use async await
async function consumePromiseFive(){
    try{
        const response = await PromiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
        
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     }
//     catch(error){
//         console.log("Error", error);
        
//     }
    
// }
// getAllUsers()

//callback hell

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))