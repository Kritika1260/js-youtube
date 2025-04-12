//everything in js is a obj 
function multiply(num){
    return num*5
}

multiply.power = 2 //since fun is a obj we can access it using the dot operator
console.log(multiply(5)); //op = 25
console.log(multiply.power); //op = 2
console.log(multiply.prototype); //op = {}, this prototype is the .this is the multiply method

//Prototypial inheritance
//array, string, function everything has prototype object and object's prototype is null

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}
const chai = new createUser("chai", 25) //without new keyword this will not work
const tea = new createUser("tea", 250)

//its not always necessary to write .prototype
chai.printMe()

/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/