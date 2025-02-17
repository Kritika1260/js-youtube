
{
    let a = 10
    const b=3
    var c = 49
}

// console.log(a); error not in scope
// console.log(b); //error not in scope
// console.log(c); // will not give error it will produce 49 as output
c=400
{
    let a = 10
    const b=3
    var c = 49
}
// console.log(c); //here also output will be 49 for c even after we have global var for c, so it is better to avoid var
//but when we will use let we will not encounter this problem

// let a=500
// if(true){
//     let a=10
//     console.log(a); //op =10
// }
// console.log(a); //op=500

//********************* IMPORTANT FOR INTERVIEW ******************
// ---- global scope in windows and in node js
//While in browsers, the global scope is the window object, in nodeJS, 
// the global scope of a module is the module itself, so when you define 
// a variable in the global scope of your Node.js module, it will be local to this module.


function one()
{
    const username = "Kritika"

    function two()
    {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website); will give error
    two()
}
//one()
if(true)
{
    const username = "Kritika "
    if(username === "Kritika")
    {
        const website = 'Youtube'
        console.log(username + website);
        
    }
}
// console.log(username); error not in scope

// **************** INTERISTING *******************
function addOne(num)
{
    return num+1
}
console.log(addOne(5)) //if we wll write this line for addOne function we will not get error and get 6 as op

const addTwo = function(num) //this is also called expression, we can create fun like this also
{
    return num+2
}
//in js var can store func also
addTwo(5)//but here if we will write this linee above addTwo declaration we will get error called hoisting