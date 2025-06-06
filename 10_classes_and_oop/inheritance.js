class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

//object
const chai = new Teacher("chai", "chai@email.com", "123")
chai.addCourse()
const masalaChai = new User("masalaChai")
//masalaChai.addCourse() //doesn't have access

chai.logMe()
masalaChai.logMe()

console.log(chai === masalaChai); //false
console.log(chai instanceof Teacher); //true
console.log(chai instanceof User); //true



