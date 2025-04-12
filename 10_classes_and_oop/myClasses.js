//ES6

// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassowrd(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User('chai', 'chai@gmail.com', '123')
// console.log(chai.encryptPassowrd()); //123abc
// console.log(chai.changeUsername()); //CHAI



//behind the scene -- if class would not have been availiable we will do the things done earlier like this
function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
//similarly other methods can be created

const chai = new User('chai', 'chai@gmail.com', '123')
console.log(chai.encryptPassword()); //123abc
console.log(chai.changeUsername()); //CHAI
